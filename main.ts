let flex_sensor = 0
basic.forever(function () {
    flex_sensor = pins.analogReadPin(AnalogPin.P2)
    basic.showNumber(flex_sensor)
    if (flex_sensor > 965) {
        basic.showIcon(IconNames.Happy)
    } else if (flex_sensor > 955 && flex_sensor < 965) {
        basic.showIcon(IconNames.No)
    } else if (flex_sensor < 955) {
        basic.showIcon(IconNames.Sad)
    }
})
