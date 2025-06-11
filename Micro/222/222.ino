char key = 'b';
int motorPin = 7; // ใช้พินนี้ควบคุมมอเตอร์

void setup() {
    Serial.begin(9600);
    pinMode(motorPin, OUTPUT); // ตั้งค่า pinMode สำหรับมอเตอร์
}

void loop() {
    if (Serial.available()) {
        key = Serial.read();
    }

    if (key == 'a') {
        digitalWrite(motorPin, HIGH); // สั่งให้มอเตอร์หมุน
    }

    if (key == 'b') {
        digitalWrite(motorPin, LOW); // สั่งให้มอเตอร์หยุด
    }
}
