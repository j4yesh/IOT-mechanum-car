const int LED_PIN = 5; // GPIO 5

void setup() {
  pinMode(LED_PIN, OUTPUT);
  
  ledcSetup(0, 5000, 8); // Configure PWM channel 0 with a frequency of 5 kHz and 8-bit resolution
  ledcAttachPin(LED_PIN, 0); // Attach PWM channel 0 to pin 5
}

void loop() {
  for (int brightness = 0; brightness <= 255; brightness++) {
    ledcWrite(0, brightness); // Set the duty cycle of PWM channel 0 to gradually increase the brightness of the LED
    delay(10);
  }
  for (int brightness = 255; brightness >= 0; brightness--) {
    ledcWrite(0, brightness); // Set the duty cycle of PWM channel 0 to gradually decrease the brightness of the LED
    delay(10);
  }
}
