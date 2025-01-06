#define THINGER_SERIAL_DEBUG
#include <ThingerESP32.h>
#include <WiFi.h>
#include "credentials.h"

// Variabel untuk ThingerIoT
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);
// Waktu tunggu koneksi ulang (dalam milidetik)
#define RECONNECT_DELAY 5000

void setup()
{
  Serial.begin(115200);
}

void loop()
{
}