let dir = 0
let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
let x = 0
let y = 0
function showLed (x: number, y: number, dir: number) {
    for (let i = 0; i <= 2; i++) {
        dir = 0
        led.plot(x, y)
        while (dir <= i - 1) {
            dir += 1
            x1 = x
            y1 = y - dir
            x2 = x + dir
            y2 = y
            led.plot(x1, y1)
            led.plot(x2, y2)
        }
        basic.pause(200)
        x = x - 1
        y = y + 1
    }
    basic.clearScreen()
}
basic.forever(function () {
    showLed(0, 0, 0)
    showLed(4, 0, 1)
    showLed(0, 4, 2)
    showLed(4, 4, 3)
})
