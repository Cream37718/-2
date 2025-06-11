int motorPin1 = 9;  // พินสำหรับหมุนซ้าย
int motorPin2 = 10; // พินสำหรับหมุนขวา

void setup() {
  pinMode(motorPin1, OUTPUT);  // กำหนดพินเป็น OUTPUT
  pinMode(motorPin2, OUTPUT);  // กำหนดพินเป็น OUTPUT
  Serial.begin(9600);          // เริ่มการสื่อสารผ่าน Serial
}

void loop() {
  if (Serial.available() > 0) {             // ตรวจสอบว่ามีข้อมูลเข้ามาหรือไม่
    char command = Serial.read();            // อ่านคำสั่งจาก Serial

    if (command == 'L') {                     // หากคำสั่งคือ 'L'
      digitalWrite(motorPin1, HIGH);         // หมุนมอเตอร์ซ้าย
      digitalWrite(motorPin2, LOW);          // หยุดหมุนขวา
      Serial.println("Motor started - Rotating Left");
    }
    else if (command == 'R') {                // หากคำสั่งคือ 'R'
      digitalWrite(motorPin1, LOW);          // หยุดหมุนซ้าย
      digitalWrite(motorPin2, HIGH);         // หมุนมอเตอร์ขวา
      Serial.println("Motor started - Rotating Right");
    }
    else if (command == 'S') {                // หากคำสั่งคือ 'S'
      digitalWrite(motorPin1, LOW);          // หยุดหมุนซ้าย
      digitalWrite(motorPin2, LOW);          // หยุดหมุนขวา
      Serial.println("Motor stopped");
    }
  }
}
