input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showString("I love you")
})
