#include <SoftwareSerial.h>

char key;
int IN1 = 5;
int IN2 = 4;

// Line message function placeholder (assuming integration elsewhere)
void sendLineMessage(const char* message) {
    Serial.println(message); // Replace with actual LINE API integration
}

void setup() {
    Serial.begin(9600);
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
}

void loop() {
    if (Serial.available()) {
        key = Serial.read();
    } else {
        key = 'z';  // Default case when no input
    }
    
    if (key == 'x') {  // Command to start the motor (rotate left)
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, HIGH);
        sendLineMessage("การซักผ้าเริ่มต้นเรียบร้อย ผ้าของคุณกำลังซัก");
        delay(60000);  // Simulate motor running for 1 minute
        
        // Stop left rotation and start right rotation
        digitalWrite(IN1, HIGH);
        digitalWrite(IN2, LOW);
        sendLineMessage("การทำงานเสร็จเรียบร้อยแล้ว กรุณานำผ้าออก");
        delay(3000);  // Simulate brief right rotation to indicate stopping
        
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
    }
    
    if (key == 'y') {  // Command to clean the washing machine
        digitalWrite(IN1, HIGH);
        digitalWrite(IN2, LOW);
        delay(3000);  // Simulate cleaning process for 3 seconds
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
    }
    
    if (key == 'z') {  // Command to stop and notify completion
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
    }
}
