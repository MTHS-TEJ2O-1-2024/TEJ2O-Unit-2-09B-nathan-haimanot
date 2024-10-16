/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan
 * Created on: Oct 2024
 * This program does rock paper scissor
*/

// variables
let randomNumber: number = 0
let score = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // rock
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic,pause(1000)
    }

    // paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    }

    // scissor
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
     }
    basic.pause(1000)
})

// checkmark
    input.onButtonPressed(Button.A, function () {
        score += 1
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    })

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
        basic.showString('score:' + score)
        basic.showIcon(IconNames.Happy)
})