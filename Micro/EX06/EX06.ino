char key;
int IN1 = 5;
int IN2 = 4;
void setup()
{
    Serial.begin(9600);
    pinMode(IN1,OUTPUT);
    pinMode(IN2,OUTPUT);
    digitalWrite(IN1,LOW);
    digitalWrite(IN2,LOW);   
}
void loop()
{
    if(Serial.available())
        key = Serial.read();
    else
        key = 'z';
        
    if (key == 'x')
    {
        digitalWrite(IN1,LOW);
        digitalWrite(IN2,HIGH);
        delay(60000);
        digitalWrite(IN1,LOW);
        digitalWrite(IN2,LOW);
    }
    
    if (key == 'y')
    {
        digitalWrite(IN1,HIGH);
        digitalWrite(IN2,LOW);
        delay(60000);
        digitalWrite(IN1,LOW);
        digitalWrite(IN2,LOW);
    }
}
