#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 20, 4);

void setup() {
  lcd.init();
  lcd.backlight();

  lcd.setCursor(0, 0);
  lcd.print("Baris pertama");
  lcd.setCursor(0, 1);
  lcd.print("Baris kedua");
  lcd.setCursor(0, 2);
  lcd.print("Baris ketiga");
  lcd.setCursor(0, 3);
  lcd.print("Baris keempat");
}

void loop() {
}
