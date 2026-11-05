let car = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . 2 2 2 2 2 2 2 2 . . . .
    . . . 2 2 f f 2 2 f f 2 2 . . .
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
    . . f . . . . . . . . . . f . .
    . f f f . . . . . . . . f f f .
    . . f . . . . . . . . . . f . .
`, SpriteKind.Player)
car.setStayInScreen(true)
controller.moveSprite(car, 100, 100)
scene.setBackgroundColor(7)
