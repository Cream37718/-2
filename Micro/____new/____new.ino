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
    Serial.println("Setup complete. Waiting for commands...");  // Debug line
}

void loop() {
    if (Serial.available()) {
        key = Serial.read();
        Serial.print("Key received: ");  // Debug line
        Serial.println(key);  // Debug line
    }

    if (key == 'r') {  // Simulate taking a picture
        Serial.println("Image captured.");
        // Simulate any additional actions for capturing an image if needed
    }

    if (key == 'q') {  // Start motor rotation left
        Serial.println("Starting motor rotation left.");
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, HIGH);
        unsigned long startTime = millis();
        while (millis() - startTime < 60000) {  // Keep motor running for 1 minute
            // Keep motor running
            // Add a slight delay to ensure serial messages can be sent smoothly
            delay(100);
            Serial.println("Motor is running left...");
        }
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
        Serial.println("Motor stopped.");
    }
}
