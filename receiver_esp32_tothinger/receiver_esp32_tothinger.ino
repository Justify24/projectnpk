#include <SoftwareSerial.h>
#include <ThingerESP32.h>
#include <WiFi.h>

// Variable array untuk data parsing
String arrData[7];

// Konfigurasi ThingerIoT
#define USERNAME "Justify24"
#define DEVICE_ID "Serial_ThingerIoT_AgrinutriIoT_1"
#define DEVICE_CREDENTIAL "T-RNK4S4IBZ9T4G0"

// Variabel untuk ThingerIoT
ThingerESP32 thing(USERNAME, DEVICE_ID, DEVICE_CREDENTIAL);

// Konfigurasi WiFi
const char* ssid = "Halo";
const char* password = "";

// Pin RX dan TX untuk komunikasi Serial2
#define RXp2 16
#define TXp2 17

// Waktu tunggu koneksi ulang (dalam milidetik)
#define RECONNECT_DELAY 5000

void setup() {
  // Inisialisasi Serial Monitor
  Serial.begin(115200);
  
  // Inisialisasi komunikasi Serial2
  Serial2.begin(9600, SERIAL_8N1, RXp2, TXp2);

  // Inisialisasi koneksi WiFi
  connectWiFi();
}

float moisture;
float temperature;
int ec;
float ph;
int n;
int p;
int k;

void loop() {
  // Cek koneksi WiFi, dan coba sambungkan jika terputus
  if (WiFi.status() != WL_CONNECTED) {
    connectWiFi();
  }

  // Baca data dari Serial2
  if (Serial2.available()) {
    String data = Serial2.readString();

    // Data yang akan dikirim ke ThingerIoT
    thing["Dataku"] >> [] (pson & out) {
      out["moisture"] = moisture;
      out["temperature"] = temperature;
      out["ec"] = ec;
      out["ph"] = ph;
      out["n"] = n;
      out["p"] = p;
      out["k"] = k;
    };

    // Uji data yang diterima dari Serial2
    if (data != "") {
      // Format data "10#29.45#89.50"
      // Parsing data
      int index = 0;
      for (int i = 0; i < data.length(); i++) {
        char delimiter = '#';
        if (data[i] != delimiter)
          arrData[index] += data[i];
        else
          index++; // Perbarui indeks
      }

      // Pastikan data yang diterima lengkap
      if (index == 6) {
        // Tampilkan nilai sensor ke Serial Monitor
        Serial.println(arrData[0]); // Moist
        Serial.println(arrData[1]); // Temp
        Serial.println(arrData[2]); // EC
        Serial.println(arrData[3]); // PH
        Serial.println(arrData[4]); // N
        Serial.println(arrData[5]); // P
        Serial.println(arrData[6]); // K

        // Isi variabel yang akan dikirim ke ThingerIoT
        moisture    = arrData[0].toFloat();
        temperature = arrData[1].toFloat();
        ec          = arrData[2].toInt();
        ph          = arrData[3].toFloat();
        n           = arrData[4].toInt();
        p           = arrData[5].toInt();
        k           = arrData[6].toInt();

        // Picu pengiriman data ke ThingerIoT
        thing.handle();
        
        // Reset nilai array arrData
        for (int i = 0; i < 7; i++) {
          arrData[i] = "";
        }
      }
    }
  }
}

// Fungsi untuk menghubungkan ke jaringan WiFi
void connectWiFi() {
  Serial.println("Connecting to WiFi...");
  WiFi.begin(ssid, password);
  int attempt = 0;
  // Tunggu hingga terhubung atau batas waktu tercapai
  while (WiFi.status() != WL_CONNECTED && attempt < 10) {
    delay(500);
    Serial.print(".");
    attempt++;
  }
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("WiFi connected!");
  } else {
    Serial.println("Unable to connect to WiFi. Please check your network settings.");
  }
}
