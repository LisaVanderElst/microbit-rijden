let stop = 0
let links = 0
let rechts = 0
let achteruit = 0
let vooruit = 0
let ir_waarde = 0
IR.IR_init()
basic.forever(function () {
    ir_waarde = IR.IR_read()
    vooruit = 47
    achteruit = 4
    rechts = 25
    links = 22
    stop = 15
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (ir_waarde == stop) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (ir_waarde == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (ir_waarde == links) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (ir_waarde == rechts) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
