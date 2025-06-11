#include <Arduino.h>

char key;          // Character for reading serial input
int IN1 = 5;       // Motor control pin 1
int IN2 = 4;       // Motor control pin 2
bool motorActive = false; // Flag to check if motor is active

void setup() {
    Serial.begin(9600);         // Initialize serial communication
    pinMode(IN1, OUTPUT);       // Set motor control pins as outputs
    pinMode(IN2, OUTPUT);
    digitalWrite(IN1, LOW);     // Set initial motor state to off
    digitalWrite(IN2, LOW);
}

void loop() {
    if (Serial.available()) {
        key = Serial.read();    // Read character from serial
    } else {
        key = 'z';              // Default value if no key is pressed
    }

    // Check if 'q' is pressed to activate the motor
    if (key == 'q' && !motorActive) {
        motorActive = true;     // Prevent multiple activations
        digitalWrite(IN1, LOW); // Turn motor left
        digitalWrite(IN2, HIGH);
        delay(60000);           // Run motor for 1 minute
        digitalWrite(IN1, LOW); // Stop motor
        digitalWrite(IN2, LOW);
        motorActive = false;    // Reset flag
    }
}
