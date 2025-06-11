#include <Servo.h>

Servo motor;  // ใช้ Servo เพื่อจำลองการหมุนมอเตอร์

int QRCodeScanned = 0;  // 0=ยังไม่แสกน, 1=สแกนแล้วและตรวจจับใบหน้าผ่านแล้ว
int washingStarted = 0;  // 0=ยังไม่เริ่มซัก, 1=กำลังซัก
int motorPin = 9;       // Pin สำหรับ Servo มอเตอร์

void setup() {
  Serial.begin(9600);
  motor.attach(motorPin);
  motor.write(0); // ตั้งค่าเริ่มต้นของมอเตอร์
}

void loop() {
  // ตรวจสอบการสแกน QR Code และตรวจจับใบหน้า
  if (Serial.available() > 0) {
    String input = Serial.readString();
    if (input == "scan") {
      QRCodeScanned = 1;
      Serial.println("Face verified, starting wash cycle");
    }
  }

  // ถ้า QR Code ถูกสแกนและใบหน้าถูกตรวจจับเริ่มการซักผ้า
  if (QRCodeScanned && !washingStarted) {
    washingStarted = 1;
    Serial.println("Washing started");
    motor.write(90);  // หมุนมอเตอร์เพื่อเริ่มการซัก
    delay(5000);      // จำลองการซักเป็นเวลา 5 วินาที
    washingStarted = 0;
    QRCodeScanned = 0;
    Serial.println("Washing finished");
    motor.write(0);   // หยุดมอเตอร์เมื่อซักเสร็จ
  }
}
