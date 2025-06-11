from flask import Flask, request
import serial
import cv2
import matplotlib.pyplot as plt
import keyboard  # ไลบรารีสำหรับตรวจจับการกดปุ่ม
import os
import time  # สำหรับการหน่วงเวลาระหว่างการทำงาน

# ตั้งค่า serial communication สำหรับมอเตอร์
ser = serial.Serial('COM2', 9600)  # แก้ไขพอร์ตตามที่ต้องการ

# Flask app setup
app = Flask(__name__)

# เปิดกล้อง
cap = cv2.VideoCapture(0)

# โหลด Haar Cascade สำหรับตรวจจับใบหน้า
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# รายชื่อและตำแหน่งใบหน้าที่จะเขียนชื่อ (ตัวอย่าง)
names = ["Cream"]

# เส้นทางโฟลเดอร์สำหรับบันทึกภาพ
save_path = r"C:\Users\acer\Desktop\code\Micro\img"
if not os.path.exists(save_path):
    os.makedirs(save_path)

image_counter = 0  # ตัวนับสำหรับการตั้งชื่อไฟล์ภาพ

detected_name = None  # ตัวแปรเก็บชื่อที่ตรวจพบ

while True:
    ret, frame = cap.read()

    if not ret:
        print("Failed to grab frame")
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for i, (x, y, w, h) in enumerate(faces):
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        name = names[i % len(names)]
        cv2.putText(frame, name, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)
        detected_name = name

    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    plt.imshow(rgb_frame)
    plt.axis('off')
    plt.draw()
    plt.pause(0.001)

    if keyboard.is_pressed('r'):
        img_name = os.path.join(save_path, f"captured_image_{image_counter}.jpg")
        cv2.imwrite(img_name, frame)
        print(f"Image saved as {img_name}")
        image_counter += 1

    if keyboard.is_pressed('q'):
        print("Exiting...")
        ser.write(b"x")  # เริ่มหมุนมอเตอร์ซ้าย
        print("Motor started rotating left")
        break

cap.release()
plt.close()

print("Motor started after camera closed")

if __name__ == "__main__":
    app.run()
