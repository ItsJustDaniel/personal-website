import React from "react"
import "./StarField.css"
class StarField extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const canvasWidth = (canvas.width = window.innerWidth)
    const canvasHeight = (canvas.height = window.innerHeight)

    const COLOR_SPACE = "black"
    const COLOR_STARS = "white"
    const STAR_NUM = 18
    const STAR_SIZE = 0.005
    const STAR_SPEED = 0.05

    //stars
    let stars = []
    let starSpeed = STAR_SPEED * canvasWidth
    let xv = starSpeed * randomSign() * (Math.random() * (1 - 0.2) + 0.2)
    let yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign()

    for (let i = 0; i < STAR_NUM; i++) {
      let speedMult = Math.random() * 1.5 + 0.5
      stars[i] = {
        r: (Math.random() * STAR_SIZE * canvasWidth) / 2,
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        xv: xv * speedMult,
        yv: yv * speedMult,
      }
    }
    //animation loop

    let timeDelta,
      timeLast = 0

    const loop = timeNow => {
      //calculates the time difference
      timeDelta = timeNow - timeLast
      timeLast = timeNow

      //space background
      ctx.fillStyle = COLOR_SPACE
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      //draw stars

      ctx.fillStyle = COLOR_STARS
      for (let i = 0; i < STAR_NUM; i++) {
        ctx.beginPath()
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2)
        ctx.fill()

        //update postion
        stars[i].x += stars[i].xv * timeDelta * 0.001

        //reposition x if goes ofscreen
        if (stars[i].x < 0 - stars[i].r) {
          stars[i].x += canvas.width + stars[i].r
        } else if (stars[i].x > canvas.width + stars[i].r) {
          stars[i].x -= canvas.width + stars[i].r
        }
        stars[i].y += stars[i].yv * timeDelta * 0.001

        if (stars[i].y < 0 - stars[i].r) {
          stars[i].y += canvas.height + stars[i].r
        } else if (stars[i].y > canvas.height + stars[i].r) {
          stars[i].y -= canvas.height + stars[i].r
        }
      }
      //call the next frame

      requestAnimationFrame(loop)
    }

    function randomSign() {
      return Math.random() >= 0.5 ? 1 : -1
    }
    requestAnimationFrame(loop)
  }

  render() {
    return <canvas ref="canvas" id="canvas"></canvas>
  }
}

export default StarField
