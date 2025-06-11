from flask import Flask, request, jsonify
from linebot import LineBotApi
from linebot.models import TextSendMessage
import serial
import cv2
import matplotlib.pyplot as plt
import keyboard
import os
import threading
import time
from datetime import datetime, timedelta

# เปิด Serial Communication สำหรับควบคุมมอเตอร์
try:
    ser = serial.Serial('COM2', 9600)  # ปรับพอร์ตตามที่ต้องการ
    print("Serial port opened successfully.")
except serial.SerialException as e:
    print(f"Could not open serial port: {e}")
    ser = None  # กำหนดเป็น None เพื่อป้องกันการเรียกใช้งานในภายหลัง

# ตั้งค่า LineBot API
channel_access_token = "eVqUjqE5PuCo+OIh2kCS6U9JDdkmrn7lNuaRuGpw5Q+ETveeJzjV6+yIRlVnaPdBMZsq420AEd7vs/i375/jPdjWc56jXjFg6HtoPJKNlgeCtC9UcYdNsnrCJxT3mm2n21F/vp2sW25utnHpQZ23sgdB04t89/1O/w1cDnyilFU="
line_bot_api = LineBotApi(channel_access_token)

# ฟังก์ชันสำหรับตอบกลับข้อความไปยัง LINE
def reply_line_message(reply_token, message):
    try:
        line_bot_api.reply_message(reply_token, TextSendMessage(text=message))
        print(f"Message sent successfully: {message}")
    except Exception as e:
        print(f"Error sending message: {str(e)}")

# ฟังก์ชันเพื่อหมุนมอเตอร์เป็นเวลา 1 นาทีใน thread แยก
def motor_run():
    if ser:
        try:
            ser.write(b'x')
            print("เริ่มหมุนมอเตอร์")
            time.sleep(60)  # มอเตอร์หมุนเป็นเวลา 1 นาที
            ser.write(b'z')
            print("หยุดมอเตอร์หลังจาก 1 นาที")
        except Exception as e:
            print(f"Error while running motor: {str(e)}")
    else:
        print("Serial port is not available. Motor cannot be started.")

# ตั้งค่า Flask app
app = Flask(__name__)

# ฟังก์ชันสำหรับดึงข้อความและ reply token จาก LINE Messaging API
def gettext(request):
    try:
        body = request.get_json()
        print("ข้อมูลที่ได้รับจาก request:", body)  # สำหรับดีบัก
        text = body['events'][0]['message']['text']
        reply_token = body['events'][0]['replyToken']
        return text, reply_token
    except (KeyError, TypeError) as e:
        print(f"Error retrieving message: {str(e)}")
        return None, None

# Route สำหรับจัดการคำขอจาก LINE Messaging API
@app.route("/", methods=["POST"])
def home():
    text, reply_token = gettext(request)

    if text:
        print(f"ข้อความที่ได้รับ: {text}")

        # ตรวจสอบคำสั่ง "check"
        if text.lower() == "check":
            # คำนวณเวลาปัจจุบัน + 1 ชั่วโมง
            pickup_time = (datetime.now() + timedelta(hours=1)).strftime("%H:%M")
            message = f"ผ้าของคุณกำลังถูกซัก\nระยะเวลาในการซัก 1 ชม.\nคุณสามารถมารับผ้าได้ช่วงเวลา {pickup_time} น."
            reply_line_message(reply_token, message)
            return jsonify({"status": "message sent"}), 200

    return jsonify({"status": "no valid command received"}), 200

# ตั้งค่ากล้องและการตรวจจับใบหน้า
cap = cv2.VideoCapture(0)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
names = ["Cream"]
save_path = r"C:\Users\acer\Desktop\code\Micro\img"
if not os.path.exists(save_path):
    os.makedirs(save_path)

image_counter = 0  # ตัวนับสำหรับชื่อไฟล์รูปภาพ

# เริ่มการตรวจจับใบหน้าและจัดการการกดปุ่มเพื่อบันทึกภาพ
while True:
    ret, frame = cap.read()

    if not ret:
        print("ไม่สามารถรับภาพจากกล้องได้")
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for i, (x, y, w, h) in enumerate(faces):
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        name = names[i % len(names)]
        cv2.putText(frame, name, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)

    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    plt.imshow(rgb_frame)
    plt.axis('off')
    plt.draw()
    plt.pause(0.001)

    if keyboard.is_pressed('r'):
        img_name = os.path.join(save_path, f"captured_image_{image_counter}.jpg")
        cv2.imwrite(img_name, frame)
        print(f"บันทึกรูปภาพชื่อ {img_name}")
        image_counter += 1

    if keyboard.is_pressed('q'):
        print("ออกจาก loop กล้องและเริ่มหมุนมอเตอร์...")
        cap.release()
        plt.close()
        threading.Thread(target=motor_run).start()  # สร้าง thread สำหรับฟังก์ชัน motor_run
        break

if __name__ == "__main__":
    app.run(port=5000, debug=True)
