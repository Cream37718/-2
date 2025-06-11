import time
import requests
import cv2

# ข้อมูล LINE Notify Token ของลูกค้า
line_token = "a6b44bfb4776ddc61e3fad5b260ac144"  # ใช้โทเคนเดียวสำหรับลูกค้าจำลอง

# ฟังก์ชันการส่งแจ้งเตือน LINE
def send_line_notify(token, message):
    url = "https://notify-api.line.me/api/notify"
    headers = {"Authorization": "Bearer " + token}
    payload = {"message": message}
    requests.post(url, headers=headers, data=payload)

# ฟังก์ชันจำลองการสแกน QR Code และตรวจจับใบหน้า
def verify_and_capture_face():
    video_capture = cv2.VideoCapture(0)
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
    
    print("Verifying face...")
    face_verified = False
    captured_image = None
    
    while True:
        ret, frame = video_capture.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in faces:
            # วาดกรอบสี่เหลี่ยมรอบใบหน้า
            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
            face_verified = True
            captured_image = frame[y:y+h, x:x+w]  # เก็บเฉพาะส่วนของใบหน้า
            
            # แสดงภาพที่ตรวจจับได้
            cv2.imshow("Face Captured", frame)
            cv2.waitKey(2000)  # แสดงภาพใบหน้าที่ตรวจจับได้ 2 วินาที
            break

        if face_verified:
            break

        # แสดงภาพที่ได้รับจากกล้องในระหว่างการตรวจจับ
        cv2.imshow("Face Verification", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    video_capture.release()
    cv2.destroyAllWindows()
    
    # บันทึกภาพใบหน้าเมื่อยืนยันสำเร็จ
    if face_verified and captured_image is not None:
        cv2.imwrite("verified_face.jpg", captured_image)  # บันทึกภาพใบหน้าที่ตรวจจับได้
    
    return face_verified

# เริ่มต้นการทำงาน
def start_wash_cycle():
    # ตรวจสอบใบหน้าและเก็บภาพ
    if verify_and_capture_face():
        print("Face verified, starting wash cycle")
        start_time = time.time()
        
        # ส่งข้อความแจ้งเตือนเมื่อเริ่มซักผ้า
        send_line_notify(line_token, "ผ้าของคุณกำลังถูกซัก")
        
        # จำลองการซักผ้า (ปรับระยะเวลาตามจริงได้)
        wash_duration = 5  # จำลองซักผ้า 5 วินาที
        time.sleep(wash_duration)
        
        # คำนวณเวลาเสร็จและเวลาที่ควรมารับผ้า (บวกเพิ่ม 15 นาทีเพื่อเผื่อเวลาพับผ้า)
        pickup_time = start_time + wash_duration + 15 * 60
        pickup_time_str = time.strftime('%H:%M', time.localtime(pickup_time))
        
        # แจ้งเตือนเมื่อซักเสร็จ
        send_line_notify(line_token, f"ผ้าของคุณเสร็จเรียบร้อยแล้ว กรุณามารับผ้าภายในเวลา {pickup_time_str}")

# เรียกใช้งานการซักผ้าจำลอง
start_wash_cycle()
