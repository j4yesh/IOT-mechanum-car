const int LF = D2; // GPIO 4
const int LB = D3; // GPIO 0
const int RF = D4; // GPIO 2
const int RB = D5; // GPIO 14

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
