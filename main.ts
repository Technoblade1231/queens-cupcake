basic.showString("3-2-1")
let Cupcake = game.createSprite(2, 2)
let cupcakeOnPlate = true
let tolerance = 200
while (cupcakeOnPlate) {
    if (input.acceleration(Dimension.X) > tolerance) {
        if (Cupcake.get(LedSpriteProperty.X) == 4) {
            cupcakeOnPlate = false
        }
        Cupcake.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < -1 * tolerance) {
        if (Cupcake.get(LedSpriteProperty.X) == 0) {
            cupcakeOnPlate = false
        } else {
            Cupcake.change(LedSpriteProperty.Y, -1)
            basic.pause(200)
        }
    }
    if (input.acceleration(Dimension.Y) > tolerance) {
        if (Cupcake.get(LedSpriteProperty.Y) == 4) {
            cupcakeOnPlate = false
        } else {
            Cupcake.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
    }
    if (input.acceleration(Dimension.Y) < -1 * tolerance) {
        if (Cupcake.get(LedSpriteProperty.Y) == 0) {
            cupcakeOnPlate = false
        } else {
            Cupcake.change(LedSpriteProperty.Y, -1)
            basic.pause(200)
        }
    }
}
basic.showString("Game Over")
