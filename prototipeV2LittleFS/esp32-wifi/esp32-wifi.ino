#define THINGER_SERIAL_DEBUG
#include <ThingerESP32.h>
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

#include <WiFi.h>

#include "credentials.h"

// void connectWiFi()
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

boolean connectWiFi()
{
  boolean connected = false;
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
    connected = true;
  }
  else
  {
    Serial.println("Unable to connect to WiFi. Please check your network settings.");
  }

  return connected;
}

void setup()
{
  Serial.begin(115200);

  boolean isConnected = connectWiFi();

  if (isConnected)
  {
    Serial.println("Terhubung dengan WiFi, data akan dikirim ke thingerio");
  }
  else
  {
    Serial.println("Belum terhubung dengan WiFi, data akan dikirim ke LittleFS terlebih dahulu");
  }
}

void loop()
{
}