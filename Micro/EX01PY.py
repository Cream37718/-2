import cv2
import matplotlib.pyplot as plt
import keyboard  # ไลบรารีสำหรับตรวจจับการกดปุ่ม
import os

# โหลด Haar Cascade สำหรับตรวจจับใบหน้า
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# เปิดกล้อง
cap = cv2.VideoCapture(0)

# รายชื่อและตำแหน่งใบหน้าที่จะเขียนชื่อ (ตัวอย่าง)
names = ["Cream", "Nat"]

# เส้นทางโฟลเดอร์สำหรับบันทึกภาพ
save_path = r"C:\Users\acer\Desktop\code\Micro\img"
if not os.path.exists(save_path):
    os.makedirs(save_path)

image_counter = 0  # ตัวนับสำหรับการตั้งชื่อไฟล์ภาพ

while True:
    # อ่านภาพจากกล้อง
    ret, frame = cap.read()

    if not ret:
        print("Failed to grab frame")
        break

    # แปลงภาพเป็น grayscale เพื่อให้การตรวจจับใบหน้าทำงานได้ดีขึ้น
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # ตรวจจับใบหน้าในภาพ
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # วาดกรอบสี่เหลี่ยมรอบๆ ใบหน้าและเขียนชื่อ
    for i, (x, y, w, h) in enumerate(faces):
        # วาดกรอบใบหน้า (สี่เหลี่ยมสีเขียว)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

        # เขียนชื่อบนภาพ (ตำแหน่งด้านบนของกรอบใบหน้า)
        name = names[i % len(names)]  # กำหนดชื่อจากรายชื่อ
        cv2.putText(frame, name, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)

    # แปลงภาพจาก BGR เป็น RGB เพื่อแสดงผลใน matplotlib
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # ใช้ matplotlib แสดงผลภาพ
    plt.imshow(rgb_frame)
    plt.axis('off')  # ปิดการแสดงแกน
    plt.draw()
    plt.pause(0.001)  # พักชั่วคราวเพื่อให้หน้าจออัปเดต

    # ตรวจจับการกดปุ่ม 'r' เพื่อถ่ายภาพและบันทึก
    if keyboard.is_pressed('r'):
        img_name = os.path.join(save_path, f"captured_image_{image_counter}.jpg")
        cv2.imwrite(img_name, frame)  # บันทึกภาพ
        print(f"Image saved as {img_name}")
        image_counter += 1

    # ตรวจจับการกดปุ่ม 'q' เพื่อออกจากลูป
    if keyboard.is_pressed('q'):
        print("Exiting...")
        break

# ปิดการทำงานของกล้องq
cap.release()
plt.close()
