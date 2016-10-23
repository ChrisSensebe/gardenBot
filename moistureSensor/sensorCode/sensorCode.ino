// input pin for the sensor
int sensorPin = 0;
// variable to store sensor value
int sensorValue;
// digital pin used to constrol the sensor
int sensorControl = 13;

void setup() {
  // initialize serial at 9600 bits/s
  Serial.begin(9600);
  // set sensorControl as output
  pinMode(sensorControl, OUTPUT);
  // power off the sensor
  digitalWrite(sensorControl, LOW);
}

void loop() {
  // power the sensor and wait ot make sure it is ready
  digitalWrite(sensorControl, HIGH);
  delay(100);
  
  // read the input on analog pin 0 and print the value on the serial link 
  int sensorValue = analogRead(sensorPin);
  Serial.println(sensorValue);

  // power off the sensor
  digitalWrite(sensorControl, LOW);
  
  // 1 minute between each read
  delay(59900);
}
