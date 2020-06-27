const GRAVITY = 0.2;
const BAD_FRUIT_PROBABILITY = 0.9;

export default class Fruit {
    constructor(p, x, y, size, color, bad, text) {
      this.p = p;
      this.position = this.p.createVector(x, y);
      this.color = color; // original color
      this.bad = bad; // bad fruit
      this.size = size; // size
      this.text = text;
      this.velocity = this.p.createVector(this.randomXVelocity(x), this.p.random(-11, -17));
      this.sliced = false;
      this.slicedTime = 0; // keep track of fade
      this.visible = true;
      this.isEndGame = false;
    }
  
    update() {
      // console.log('position:', this.position)
      this.position.add(this.velocity);
      this.velocity.x *= 0.99; // air resistance
      this.velocity.y += GRAVITY; // gravity
      // console.log('this.position.y', this.position.y, 'this.p.height', this.p.height)
      this.visible = (this.position.y < this.p.height); // update visibility
      // console.log('visible:', this.visible)
      if (this.sliced) {
        this.slicedTime++; // update sliced time
      }
    }
  
    // Draw particle and connect it with a line
    // Draw a line to another
    display() {
      var fillColor = this.color;
      var textColor = this.p.color(255, 255, 255);
      if (this.sliced) {
        if (this.bad) {
          /* game over */
          this.isEndGame = true;
        }
        var interp = this.p.constrain(this.slicedTime, 0, 15) / 15; // how much to interpolate
        // lerp to background color
        fillColor = this.p.lerpColor(this.color, this.p.color(51), interp);
        textColor = this.p.lerpColor(textColor, this.p.color(51), interp);
      }
      if (this.bad) {
        this.p.stroke(0);
        this.p.strokeWeight(5);
      } else {
        this.p.noStroke();
      }
      /* draw */
      // this.p.textSize(32);
      // this.p.text(this.text, this.position.x, this.position.y);
      this.p.noStroke();
      this.p.fill(fillColor);
      this.p.ellipse(this.position.x, this.position.y, this.size*1.3);
      this.p.fill(textColor);
      this.p.textAlign(this.p.CENTER, this.p.CENTER);
      this.p.textSize(30)
      this.p.text(this.text, this.position.x, this.position.y)
      
    }

    randomXVelocity(x) {
      if( x > this.p.width/2){
        return this.p.random(-1.5, -0.5);
      }else{
        return this.p.random(0.5, 1.5);
      }
    }
  }