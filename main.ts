scene.setBackgroundColor(6)
let KDogSprite = sprites.create(img`
    . . e e e . . . . e e e . . . . 
    . e 2 2 2 e . . e 2 2 2 e . . . 
    e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
    e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
    f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
    . f f 2 4 2 2 2 2 2 2 f f . . . 
    . . f 2 f 2 2 2 2 f 2 f . . . . 
    . . f 2 2 2 f f 2 2 2 f . . f f 
    . . f e 2 2 2 2 2 2 7 f . f 2 f 
    . . . f 7 7 7 7 7 7 e e f 2 2 f 
    . . . f e 2 2 2 2 2 2 e e 2 f . 
    . . . f 2 2 2 2 2 e 2 2 f f . . 
    . . . f 2 f f f 2 f f 2 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
KDogSprite.setPosition(116, 35)
for (let index = 0; index < 10; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
KDogSprite.say("wow! that cat over there is so cool!")
for (let index = 0; index < 10; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
pause(5000)
KDogSprite.say("...")
pause(1000)
music.baDing.play()
let BCatSprite = sprites.create(img`
    . . . . e e e . . . . e e e 
    . . . . e 5 5 e . . e 5 5 e 
    . . . . e e 5 5 f f 5 5 e e 
    . . . . e 3 e 5 5 5 5 e 3 e 
    . . . . f 3 3 5 5 5 5 3 3 f 
    . . . . f 5 5 5 5 5 5 5 5 f 
    . f . . f 5 5 2 5 5 5 2 5 f 
    f 5 f . f f 5 5 5 f f 5 5 f 
    f 5 f . f 4 f 5 5 5 5 5 4 f 
    f 5 f f e e 4 4 4 4 4 4 f . 
    f 5 5 e e 5 5 5 5 5 5 e f . 
    . f f f 5 5 e 5 5 5 5 5 f . 
    . . . f 5 f f 5 f f f 5 f . 
    . . . f f . . f f . . f f . 
    `, SpriteKind.Player)
BCatSprite.setPosition(50, 90)
pause(1000)
KDogSprite.say("oh no! he's here!")
pause(5000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say("what do you want stink for brains?!")
music.wawawawaa.play()
pause(5000)
BCatSprite.say("...")
pause(1000)
KDogSprite.say(":( he's rude...")
pause(2000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say("huh! what did you say about me!")
music.wawawawaa.play()
pause(5000)
BCatSprite.say("...")
pause(1000)
KDogSprite.say("I said... you were cool?")
pause(5000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say("...well of course im cool")
music.baDing.play()
pause(5000)
BCatSprite.say("...")
pause(1000)
KDogSprite.say(":) wanna go get ice cream?")
for (let index = 0; index < 10; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
pause(1000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say("like i'd get ice cream with someone like you!")
music.wawawawaa.play()
pause(5000)
BCatSprite.say("...")
pause(1000)
KDogSprite.say(":( pwetty pweaseeeeeee")
for (let index = 0; index < 10; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
pause(2000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say(">:( i don't need any friends")
pause(5000)
BCatSprite.say("...")
pause(1000)
KDogSprite.say(":,( pleaseeee")
for (let index = 0; index < 10; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
pause(5000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say("FINE! BUT YOU PAY")
BCatSprite.setPosition(35, 35)
music.baDing.play()
for (let index = 0; index < 10; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
pause(5000)
BCatSprite.say("...")
pause(1000)
KDogSprite.say("YAY BESTIES!!")
for (let index = 0; index < 10; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
pause(2000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say("no we aren't... ")
pause(2000)
BCatSprite.say("...")
pause(1000)
KDogSprite.say("sureeeeeeeeeeee")
pause(1000)
KDogSprite.say("...")
pause(1000)
BCatSprite.say("whatever...")
pause(1000)
BCatSprite.say("...")
let IC1Sprite = sprites.create(img`
    . . . . . 1 1 1 . 1 f f 1 1 . . 
    . . . . 1 e e f 1 f e e e e 1 . 
    . . . 1 f e e e f e e e f 1 e 1 
    . . 1 f f e e e f f e e e 1 1 . 
    . 1 e e f e e e e f f e e 1 . . 
    . 1 e e e f e e e e e f e e 1 . 
    . b f e e e f e e e e e e e 1 . 
    . 4 b e e e e f f e e e e 1 . . 
    . 4 4 f e e e e e e f f f 1 . . 
    . 4 f b f e e e e e e e e 1 . . 
    4 f f 5 b f e e e e e e e 1 . . 
    4 5 f 5 5 b b f e e e e f 1 . . 
    4 5 5 f 5 5 f b b b f f 1 . . . 
    4 5 5 5 f f f f 4 4 b 1 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `, SpriteKind.Player)
IC1Sprite.setPosition(103, 38)
let IC2Sprite = sprites.create(img`
    . . . . . f f f . f 1 1 f f . . 
    . . . . f 3 3 1 f 1 3 3 3 3 f . 
    . . . f 1 3 3 3 1 3 3 3 1 f 1 f 
    . . f 1 1 3 3 3 1 1 3 3 3 f f . 
    . f 3 3 1 3 3 3 3 1 1 3 3 f . . 
    . f 3 3 3 1 3 3 3 3 3 1 3 3 f . 
    . f 1 3 3 3 1 3 3 3 3 3 3 3 f . 
    . 4 b 3 3 3 3 1 1 3 3 3 3 1 f . 
    . 4 4 1 3 3 3 3 3 3 1 1 1 f . . 
    . 4 d b 1 3 3 3 3 3 3 3 3 f . . 
    4 d d 5 b 1 3 3 3 3 3 3 3 f . . 
    4 5 d 5 5 b b 1 3 3 3 3 1 f . . 
    4 5 5 d 5 5 d b b b 1 1 f . . . 
    4 5 5 5 d d d d 4 4 f f . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `, SpriteKind.Player)
IC2Sprite.setPosition(22, 38)
for (let index = 0; index < 40; index++) {
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . f f . 
        . . f e 2 2 2 2 2 2 7 f f 2 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 f . 
        . . . f e 2 2 2 2 2 2 e e f . . 
        . . . f 2 2 2 2 2 e 2 2 f . . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    KDogSprite.setImage(img`
        . . e e e . . . . e e e . . . . 
        . e 2 2 2 e . . e 2 2 2 e . . . 
        e 2 2 2 2 2 e e 2 2 2 2 2 e . . 
        e 2 2 f 2 2 2 2 2 2 f 2 2 e . . 
        f 2 f 2 2 2 2 2 2 2 2 f 2 f . . 
        . f f 2 4 2 2 2 2 2 2 f f . . . 
        . . f 2 f 2 2 2 2 f 2 f . . . . 
        . . f 2 2 2 f f 2 2 2 f . . f f 
        . . f e 2 2 2 2 2 2 7 f . f 2 f 
        . . . f 7 7 7 7 7 7 e e f 2 2 f 
        . . . f e 2 2 2 2 2 2 e e 2 f . 
        . . . f 2 2 2 2 2 e 2 2 f f . . 
        . . . f 2 f f f 2 f f 2 f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
