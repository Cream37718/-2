import cv2
import serial
import time
from linebot import LineBotApi
from linebot.models import TextSendMessage, StickerSendMessage

# ตั้งค่า Line Bot Token ของคุณ
line_bot_api = LineBotApi('iO7MGBg7HhMUiqq7F55J2n2coUR72+I0DtEFS/0mbGTuhtPkzaEH1JdAWBqsv1/TMZsq420AEd7vs/i375/jPdjWc56jXjFg6HtoPJKNlgeyDq6cdpzfJrtgXbzWSUeMggbpjMDiaPPzLiM2YUY6iAdB04t89/1O/w1cDnyilFU=')

# เชื่อมต่อ Serial COM2 ที่ 9600 baud
ser = serial.Serial('COM2', 9600, timeout=1)

# ตั้งค่าโฟลเดอร์ที่ต้องการเซฟภาพ
image_folder = r"C:\Users\acer\Desktop\code\Micro\img"

# ตั้งค่าโมเดลสำหรับตรวจจับใบหน้า
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def send_line_message(user_id, text, sticker_package_id, sticker_id):
    # ส่งข้อความและสติ๊กเกอร์ผ่านไลน์
    messages = [
        TextSendMessage(text=text),
        StickerSendMessage(package_id=sticker_package_id, sticker_id=sticker_id)
    ]
    line_bot_api.push_message(user_id, messages)

def capture_image():
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()
    
    if ret:
        filename = f"{image_folder}/capture_{int(time.time())}.jpg"
        cv2.imwrite(filename, frame)
        print(f"Saved image {filename}")
        return filename
    else:
        print("Failed to capture image")
        return None

def detect_face_and_notify(image_path, user_id):
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    if len(faces) > 0:
        # ส่งข้อความพร้อมรายละเอียดและสติ๊กเกอร์
        send_line_message(user_id, "ใบหน้าถูกตรวจพบและบันทึกเรียบร้อย", '1', '114')
        return True
    else:
        send_line_message(user_id, "ไม่พบใบหน้าในภาพ", '1', '1')
        return False

def main():
    while True:
        if ser.in_waiting > 0:
            command = ser.readline().decode().strip()
            
            if command == 'capture':  # รับคำสั่งให้ถ่ายภาพ
                image_path = capture_image()
                
                if image_path:
                    # ส่งรายละเอียดเวลามารับผ้าและเวลาซักผ้า
                    current_time = time.strftime("%Y-%m-%d %H:%M:%S")
                    text_message = f"ถ่ายภาพเวลา {current_time}\nเวลามารับผ้า: 15:00\nเวลาซักผ้า: 17:00"
                    send_line_message('USER_LINE_ID', text_message, '2', '179')
                    
                    # ตรวจจับใบหน้าในภาพ
                    if detect_face_and_notify(image_path, 'USER_LINE_ID'):
                        send_line_message('USER_LINE_ID', "ขอบคุณที่ใช้บริการ", '2', '2')

            time.sleep(1)

if __name__ == "__main__":
    main()
