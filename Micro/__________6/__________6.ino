char key;
int IN1 = 5;
int IN2 = 4;

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
    if(Serial.available())
        key = Serial.read();
    else
        key = 'z';  // Default case when no input
        
    if (key == 'x')  // Command to start washing
    {
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, HIGH);
        delay(3000);  // Simulate washing process for 3 seconds
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
    }
    
    if (key == 'y')  // Command to clean the washing machine
    {
        digitalWrite(IN1, HIGH);
        digitalWrite(IN2, LOW);
        delay(3000);  // Simulate cleaning process for 3 seconds
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
    }
    
    if (key == 'z')  // Command to stop and notify completion
    {
        digitalWrite(IN1, LOW);
        digitalWrite(IN2, LOW);
    }
}
