#include <SoftwareSerial.h>

#define BUF_SIZE 20
#define TIMEOUT  100
#define USE_CAST true

#define MOIST 0
#define TEMP  1
#define EC    2
#define PH    3
#define NITRO 4
#define PHOS  5
#define POTA  6


const byte ROPin = 2;
const byte DIPin = 3;
const byte DE = 12;
const byte RE = 13;

SoftwareSerial mod(ROPin, DIPin);



//all together.. 7 in 1, first 7 registers from device address 1..
const byte dataMod[7][8]={
 {0x01, 0x03, 0x00, 0x00, 0x00, 0x01, 0x84, 0x0A},//moist
 {0x01, 0x03, 0x00, 0x01, 0x00, 0x01, 0xD5, 0xCA},//temp
 {0x01, 0x03, 0x00, 0x02, 0x00, 0x01, 0x25, 0xCA},//ec
 {0x01, 0x03, 0x00, 0x03, 0x00, 0x01, 0x74, 0x0A},//ph
 {0x01, 0x03, 0x00, 0x04, 0x00, 0x01, 0xc5, 0xcb},//nitro
 {0x01, 0x03, 0x00, 0x05, 0x00, 0x01, 0x94, 0x0b},//phos
 {0x01, 0x03, 0x00, 0x06, 0x00, 0x01, 0x64, 0x0b}};//pot

//same but address 255 (broadcast) any connected sensor
//should respond, the sensor will replace the 255 with their
//currently configured address, change USE_CAST to true to use
const byte dataMod_B[7][8]={
 {0xFF, 0x03, 0x00, 0x00, 0x00, 0x01, 0x91, 0xD4},//moist
 {0xFF, 0x03, 0x00, 0x01, 0x00, 0x01, 0xC0, 0x14},//temp
 {0xFF, 0x03, 0x00, 0x02, 0x00, 0x01, 0x30, 0x14},//ec
 {0xFF, 0x03, 0x00, 0x03, 0x00, 0x01, 0x61, 0xD4},//ph
 {0xFF, 0x03, 0x00, 0x04, 0x00, 0x01, 0xD0, 0x15},//nitro
 {0xFF, 0x03, 0x00, 0x05, 0x00, 0x01, 0x81, 0xD5},//phos
 {0xFF, 0x03, 0x00, 0x06, 0x00, 0x01, 0x71, 0xD5}};//pot

//incoming buffer
byte buf[BUF_SIZE];

void setup() {
  Serial.begin(9600);
  //check different bauds could be 4800
  mod.begin(4800);
  pinMode(RE, OUTPUT);
  pinMode(DE, OUTPUT);
  Serial.println("Ready..");
}

void loop() {
  kirimdata();
//  // Baca permintaan dari NodeMCU
//  String minta = "";
//  while (Serial.available() > 0) {
//    minta += char(Serial.read());
//  }
//  minta.trim();
//
//  // Uji variabel minta
//  if (minta == "Ya") {
//    // Kirim datanya
//    kirimdata();
//  }
//
//  // Kosongkan variabel minta
//  minta = "";
  delay(5000);
}

uint16_t GetModVal(byte val) {
  uint32_t startTime = 0;
  uint8_t byteCount = 0;
  memset(buf, 0, sizeof(buf));
  digitalWrite(DE, HIGH);
  digitalWrite(RE, HIGH);
  delay(10);
  if (USE_CAST)
    mod.write(dataMod_B[val], sizeof(dataMod_B[val]));
  else
    mod.write(dataMod[val], sizeof(dataMod[val]));
  mod.flush();
  digitalWrite(DE, LOW);
  digitalWrite(RE, LOW);

  startTime = millis();
  while (millis() - startTime <= TIMEOUT) {
    if (mod.available() && byteCount < sizeof(buf)) {
      buf[byteCount++] = mod.read();
    }
  }
  return (uint16_t)(buf[3] << 8 | buf[4]);
}

void kirimdata() {
  String datakirim = String(GetModVal(MOIST) * 0.1) + "#" + String(GetModVal(TEMP) * 0.1) + "#" +
                     String(GetModVal(EC)) + "#" +
                     String(GetModVal(PH) * 0.1) + "#" +
                     String(GetModVal(NITRO)) + "#" +
                     String(GetModVal(PHOS)) + "#" +
                     String(GetModVal(POTA));
  Serial.println(datakirim);
}
