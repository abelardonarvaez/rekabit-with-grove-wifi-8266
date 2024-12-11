input.onButtonPressed(Button.A, function () {
    basic.showString(esp8266.readBlynk("2S-rJRiNZ87WYUkBNzFaarURu4b_2T14", "V1"))
})
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
basic.showString("Initializing")
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
esp8266.connectWiFi("LIB-0243726", "y7nCvjnshmzp")
basic.showString("Connecting")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
basic.forever(function () {
	
})
