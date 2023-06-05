#define BLYNK_TEMPLATE_ID "TMPL3F15Fld9I"
#define BLYNK_TEMPLATE_NAME "rc car"
#define BLYNK_AUTH_TOKEN "qAFoSlFMRHIacSXfirGgE4EwTZFw0sT4"


#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>  
#include <BlynkSimpleEsp8266.h>
 

char auth[] = BLYNK_AUTH_TOKEN;
// char ssid[] = "realme 8j";  // Enter your Wifi Username
// char pass[] = "rick_astly";  // Enter your Wifi password
char ssid[] = "realme 8j";  // Enter your Wifi Username
char pass[] = "rick_astly";  // Enter your Wifi password

BLYNK_WRITE(V0){
  digitalWrite(D0,param.asInt());
}

BLYNK_WRITE(V1){
  digitalWrite(D1,param.asInt());
}

BLYNK_WRITE(V2){
  digitalWrite(D2,param.asInt());
}

BLYNK_WRITE(V3){
  digitalWrite(D3,param.asInt());
}

void setup()
{
  Serial.begin(9600);
  Blynk.begin(auth, ssid, pass);
  pinMode(D0,OUTPUT);
  pinMode(D1,OUTPUT);
  pinMode(D2,OUTPUT);
  pinMode(D3,OUTPUT);

}

//In the loop function include Blynk.run() command.
void loop()
{
  Blynk.run();
}
