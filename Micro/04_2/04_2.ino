#include <Arduino.h>

char key;
int IN1 = 5;
int IN2 = 4;

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

    if (key == 'r') {  // Simulate taking a picture
        Serial.println("Image captured.");
        // Implement any other actions for capturing an image if needed
    }

    if (key == 'q') {  // Command to start motor rotation left
        Serial.println("Exiting and starting motor rotation left.");
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, HIGH);
        delay(60000);  // Keep motor running for 1 minute
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
    }
}
