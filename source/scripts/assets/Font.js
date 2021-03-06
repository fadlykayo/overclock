import Sprite from "scripts/utility/Sprite.js"
import COLORS from "scripts/assets/Colors.js"

const FONT_SCALE = 2

var FONT = {
    1: [
        " X",
        "XX",
        " X",
        " X",
        " X",
    ],
    2: [
        " XX ",
        "X  X",
        "  X ",
        " X  ",
        "XXXX",
    ],
    3: [
        "XXX ",
        "   X",
        " XXX",
        "   X",
        "XXX"
    ],
    4: [
        "  X ",
        " XX ",
        "X X ",
        "XXXX",
        "  X ",
    ],
    5: [
        "XXXX",
        "X   ",
        "XXX ",
        "   X",
        "XXX ",
    ],
    6: [
        " XX ",
        "X   ",
        "XXX ",
        "X  X",
        " XX ",
    ],
    7: [
        "XXXX",
        "   X",
        "  X ",
        " X  ",
        " X  ",
    ],
    8: [
        " XX ",
        "X  X",
        " XX ",
        "X  X",
        " XX",
    ],
    9: [
        " XX ",
        "X  X",
        " XXX",
        "   X",
        " XX ",
    ],
    0: [
        " XX ",
        "X  X",
        "X  X",
        "X  X",
        " XX",
    ],
    A: [
        " XX ",
        "X  X",
        "XXXX",
        "X  X",
        "X  X",
    ],
    B: [
        "XXX ",
        "X  X",
        "XXX ",
        "X  X",
        "XXX ",
    ],
    C: [
        " XX",
        "X  ",
        "X  ",
        "X  ",
        " XX",
    ],
    D: [
        "XXX ",
        "X  X",
        "X  X",
        "X  X",
        "XXX ",
    ],
    E: [
        "XXX",
        "X  ",
        "XX ",
        "X  ",
        "XXX",
    ],
    F: [
        "XXX",
        "X  ",
        "XXX",
        "X  ",
        "X  ",
    ],
    G: [
        " XXX",
        "X   ",
        "X XX",
        "X  X",
        " XXX",
    ],
    I: [
        "XXX",
        " X ",
        " X ",
        " X ",
        "XXX",
    ],
    K: [
        "X  X",
        "X X ",
        "XX  ",
        "X X ",
        "X  X",
    ],
    L: [
        "X   ",
        "X   ",
        "X   ",
        "X   ",
        "XXXX",
    ],
    N: [
        "X  X",
        "XX X",
        "X XX",
        "X  X",
        "X  X",
    ],
    O: [
        " XX ",
        "X  X",
        "X  X",
        "X  X",
        " XX ",
    ],
    R: [
        "XXX ",
        "X  X",
        "X  X",
        "XXX ",
        "X  X",
    ],
    T: [
        "XXX",
        " X ",
        " X ",
        " X ",
        " X ",
    ],
    U: [
        "X  X",
        "X  X",
        "X  X",
        "X  X",
        " XX ",
    ],
    V: [
        "X  X",
        "X  X",
        "X X ",
        "X X ",
        " X  ",
    ],
    W: [
        "X   X",
        "X   X",
        "X X X",
        "X X X",
        " X X ",
    ],
    Y: [
        "X  X",
        "X  X",
        " XXX",
        "   X",
        "XXX ",
    ],
    " ": [
        " ",
        " ",
        " ",
        " ",
        " ",
    ],
    "!": [
        "X",
        "X",
        "X",
        " ",
        "X",
    ]
}

for(var key in FONT) {
    FONT[key] = new Sprite(FONT[key], {"X": COLORS.WHITE}, FONT_SCALE)
}

export default FONT
