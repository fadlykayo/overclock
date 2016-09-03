class Game {
    constructor() {
        this.player = new Player()

        this.thugs = [
            new Thug({
                game: this,
                position: {
                    x: WIDTH * 0.75,
                    y: HEIGHT / 2 - 20
                }
            }),
            // new Thug({
            //     game: this,
            //     position: {
            //         x: WIDTH * 0.75,
            //         y: HEIGHT / 2 + 20
            //     }
            // }),
        ]

        this.time = 0
    }
    update(delta) {
        delta = {
            realtime: {
                inMilliseconds: delta,
                inSeconds: delta / 1000,
                inFrames: delta / (1000 / 60)
            },
            glitchtime: {
                // ...
            }
        }
        this.time += delta.realtime.inSeconds

        var frequency = 2.5, shift = 0
        var fluxtime = Math.sin(frequency * this.time + shift) // generates the waveform
        fluxtime = Math.sin((Math.PI / 2) * fluxtime) // squares the waveform
        fluxtime = (fluxtime + 1) / 2 // normalizes {-1 to 1} to {0 to 1}
        fluxtime = fluxtime * delta.realtime.inFrames
        delta.glitchtime.inFrames = fluxtime

        this.player.update(delta)

        this.thugs.forEach((thug) => {
            thug.update(delta)
        })
    }
    render() {
        render.clear()

        render.canvas.context.fillStyle = "#444"
        render.canvas.context.beginPath()
        render.canvas.context.arc(
            this.player.position.x,
            this.player.position.y,
            50, 0, Math.PI * 2, false
        )
        render.canvas.context.fill()

        this.thugs.forEach((thug) => {
            render.render(thug)
        })

        render.render(this.player)
    }
}