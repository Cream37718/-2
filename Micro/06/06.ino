char key;
int IN1 = 5;
int IN2 = 4;
unsigned long previousMillis = 0;
const long interval = 60000; // 60 seconds
bool motorRunning = false;

void setup()
{
    Serial.begin(9600);
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);   
}

void loop()
{
    if (Serial.available())
    {
        key = Serial.read();
    }

    // Check the key input and set motor direction
    if (key == 'q') // Rotate left for 1 minute when 'q' is received
    {
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, HIGH); // Set IN2 HIGH to rotate left
        motorRunning = true;
        previousMillis = millis(); // Store the start time
    }

    // Stop motor after the interval
    if (motorRunning && (millis() - previousMillis >= interval))
    {
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW); // Stop the motor
        motorRunning = false;
    }
}
