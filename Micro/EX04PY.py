from flask import Flask, request
from linebot import LineBotApi
from linebot.models import TextSendMessage as send_text
import serial
import cv2
import matplotlib.pyplot as plt
import keyboard  # ไลบรารีสำหรับตรวจจับการกดปุ่ม
import os
import time

# ตั้งค่า serial communication สำหรับมอเตอร์
ser = serial.Serial('COM2', 9600)  # แก้ไขพอร์ตตามที่ต้องการ

# LineBot API settings
line_tokens = {
    "Cream": "<gU0zhRO3OVL79dtskpy816VYb0Pmn7zABfiDAKdS/uO16Eecj6/WRhB5Dpzv7C9zMZsq420AEd7vs/i375/jPdjWc56jXjFg6HtoPJKNlge9T5g8e+RfuabqE2d1Z+2OiuELxRn90QSng1zloW7lqAdB04t89/1O/w1cDnyilFU=>"
}
user_ids = {
    "Cream": "<U948397e9e259da7964c5af644a449f66>"
}

def send_line_message(name, message):
    token = line_tokens.get(name)
    user_id = user_ids.get(name)
    if token and user_id:
        try:
            line_bot_api = LineBotApi(token)
            line_bot_api.push_message(user_id, send_text(text=message))
            print(f"Message sent to {name}: {message}")
        except Exception as e:
            print(f"Error sending message to {name}: {e}")
    else:
        print(f"No valid token or user ID for {name}")

# Flask app setup
app = Flask(__name__)

def gettext(request):
    body = request.get_json()
    text = body['events'][0]['message']['text']
    reply_token = body['events'][0]['replyToken']
    return text, reply_token

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
        break

cap.release()
plt.close()

# สั่งการให้มอเตอร์หมุนซ้ายเป็นเวลา 1 นาที
ser.write(b'x')
print("Motor started after camera closed")
time.sleep(60)
ser.write(b'z')  # หยุดมอเตอร์หลังจากหมุนครบ 1 นาที
print("Motor stopped after 1 minute")

if detected_name == "Cream":
    send_line_message(detected_name, "ผ้าของคุณเริ่มซักแล้ว")
    print("Automatic message sent: ผ้าของคุณเริ่มซักแล้ว")

if __name__ == "__main__":
    app.run()
