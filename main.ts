input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("C5 B A G F E D C ", 120)
    soma += 1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.LeftTriangle)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(soma)
    led.plot(1, 16)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Snake)
})
let soma = 0
soma = 0
