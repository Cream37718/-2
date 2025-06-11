from flask import Flask, request
import serial
import cv2
import matplotlib.pyplot as plt
import keyboard  # Library for detecting key presses
import os
from datetime import datetime, timedelta
from linebot import LineBotApi
from linebot.models import TextSendMessage

# LINE Bot API settings
channel_access_token = "YOUR_CHANNEL_ACCESS_TOKEN"  # Replace with your actual token
line_bot_api = LineBotApi(channel_access_token)

# Flask app setup
app = Flask(__name__)
ser = serial.Serial('COM2', 9600)  # Update the port as needed

# Function to get text from request
def gettext(request):
    body = request.get_json()
    text = body['events'][0]['message']['text']
    reply_token = body['events'][0]['replyToken']
    return text, reply_token

# Camera setup
cap = cv2.VideoCapture(0)

# Load Haar Cascade for face detection
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Names and folder path for image saving
names = ["Cream"]
save_path = r"C:\Users\acer\Desktop\code\Micro\img"
if not os.path.exists(save_path):
    os.makedirs(save_path)

image_counter = 0  # Counter for image file names
detected_name = None  # Variable to store detected name

# Main loop for face detection and saving images
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

# Check for commands from LINE message
@app.route("/", methods=["POST"])
def home():
    text, reply_token = gettext(request)  # Get text and reply_token from request

    if text:  # Check if text is not empty
        print(text)  # Print the text for checking

        # Check for "Check" command to start the motor
        if text.lower() == "check":
            ser.write(b'x')  # Start motor
            wash_duration = 30  # Duration in minutes
            finish_time = datetime.now() + timedelta(minutes=wash_duration)
            pickup_time = finish_time + timedelta(minutes=30)

            message = (
                f"ผ้าของคุณกำลังซัก ระยะเวลาในการซัก {wash_duration} นาที "
                f"คาดการณ์ซักเสร็จประมาณ {finish_time.strftime('%H:%M')} "
                f"สามารถมารับผ้าได้ประมาณ {pickup_time.strftime('%H:%M')}"
            )

            # Reply to LINE with washing status message
            line_bot_api.reply_message(reply_token, TextSendMessage(text=message))
            print("Motor started and check message sent")

        # Check for "Finish" command to stop the motor
        elif text.lower() == "finish":
            ser.write(b'z')  # Stop motor
            line_bot_api.reply_message(reply_token, TextSendMessage(text="การทำงานเสร็จเรียบร้อยแล้ว กรุณานำผ้าออก"))
            print("Motor stopped and finish message sent")

    return "Welcome"  # General response message

if __name__ == "__main__":
    app.run()
