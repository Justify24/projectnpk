#define THINGER_SERIAL_DEBUG
#include <ThingerESP32.h>
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

#include <WiFi.h>

#include "credentials.h"

void setup()
{
  Serial.begin(115200);

  connectWiFi();
}

void loop()
{
}

void connectWiFi()
{
  Serial.print("Connecting to ");
  Serial.println(SSID);

  WiFi.begin(SSID, PASSWORD);

  int attempt = 0;
  while (WiFi.status() != WL_CONNECTED && attempt < 10)
  {
    delay(300);
    Serial.print(".");
    attempt++;
  }

  if (WiFi.status() == WL_CONNECTED)
  {
    Serial.println("WiFi connected!");
  }
  else
  {
    Serial.println("Unable to connect to WiFi. Please check your network settings.");
  }
}