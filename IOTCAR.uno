const int LF = 2;
const int LB =3;
const int RF = 4;
const int RB = 5;

void setup(){
  Serial.begin(9600);
  pinMode(LF,OUTPUT);
  pinMode(LF,OUTPUT);
  pinMode(LF,OUTPUT);
  pinMode(LF,OUTPUT);
}

void loop(){
  digitalWrite(LF,HIGH);
  digitalWrite(LB,LOW);
  digitalWrite(RF,HIGH);
  digitalWrite(LB,LOW);
}
