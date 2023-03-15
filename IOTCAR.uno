const int LF = 4; // GPIO 4
const int LB = 0; // GPIO 0
const int RF = 2; // GPIO 2
const int RB = 14; // GPIO 14

void setup(){
  Serial.begin(9600);
  pinMode(LF,OUTPUT);
  pinMode(LB,OUTPUT);
  pinMode(RF,OUTPUT);
  pinMode(RB,OUTPUT);
}

void loop(){
  digitalWrite(LF,HIGH);
  digitalWrite(LB,LOW);
  digitalWrite(RF,HIGH);
  digitalWrite(RB,LOW);
}
