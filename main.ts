basic.forever(function () {
    if (input.lightLevel() > 300) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
