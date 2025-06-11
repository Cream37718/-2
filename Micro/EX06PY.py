from flask import Flask, request
from linebot import LineBotApi
from linebot.models import TextSendMessage as send_text
import serial

# LineBot API settings
channel_access_token = "eVqUjqE5PuCo+OIh2kCS6U9JDdkmrn7lNuaRuGpw5Q+ETveeJzjV6+yIRlVnaPdBMZsq420AEd7vs/i375/jPdjWc56jXjFg6HtoPJKNlgeCtC9UcYdNsnrCJxT3mm2n21F/vp2sW25utnHpQZ23sgdB04t89/1O/w1cDnyilFU="
line_send = LineBotApi(channel_access_token).reply_message

# ฟังก์ชันสำหรับดึงข้อความและ reply_token จาก request ที่ส่งมาจาก Line Messaging API
def gettext(request):
    body = request.get_json()  # ดึงข้อมูล JSON จาก request
    text = body['events'][0]['message']['text']  # ดึงข้อความจาก JSON
    reply_token = body['events'][0]['replyToken']  # ดึง reply token จาก JSON
    return text, reply_token

# ฟังก์ชันสำหรับตั้งค่า Serial communication
def config_flask_ser(app, port, baudrate):
    ser = serial.Serial(port, baudrate)  # เปิดการเชื่อมต่อ serial communication
    return ser

# Flask app and serial communication setup
app = Flask(__name__)
ser = config_flask_ser(app, 'COM2', 9600)  # กำหนดค่า serial communication

# Routing สำหรับการรับคำขอจาก Line Messaging API
@app.route("/", methods=["GET", "POST"])
def home():
    text, reply_token = gettext(request)  # ดึงข้อความและ reply_token จาก request

    if text != "":  # ตรวจสอบว่ามีข้อความที่ไม่ว่าง
        print(text)  # พิมพ์ข้อความออกมาเพื่อตรวจสอบ

        # ตรวจสอบคำสั่งจากข้อความ
        if text == "เริ่มการทำงานซักผ้า":
            ser.write(b"x")  # ส่งคำสั่งผ่าน serial communication เพื่อเริ่มการซักผ้า
            line_send(reply_token, send_text(text="การซักผ้าเริ่มต้นเรียบร้อย"))

        elif text == "ล้างเครื่อง":
            ser.write(b"y")  # ส่งคำสั่งผ่าน serial communication เพื่อเริ่มการล้างเครื่อง
            line_send(reply_token, send_text(text="การล้างเครื่องเริ่มต้นเรียบร้อย"))

        elif text == "หยุด":
            ser.write(b"z")  # ส่งคำสั่งผ่าน serial communication เพื่อหยุดการทำงาน
            line_send(reply_token, send_text(text="การทำงานเสร็จเรียบร้อยแล้ว กรุณานำผ้าออก"))

    return "Hello LINE"  # ข้อความตอบกลับทั่วไป

if __name__ == "__main__":
    app.run()
