
const BLADE_SIZE = 50;
const BLADE_LENGTH = 150;
export default class Blads  {
    constructor(p, color) {
      this.swipes = []; // fading blade movement
      this.color = color;
      this.p = p;
    }
  
    // Display plath
    update() {
      /* fade swipe */
      if (this.swipes.length > BLADE_SIZE) { // delete two every other frame
        this.swipes.splice(0, 1);
        this.swipes.splice(0, 1);
      } else if (this.swipes.length > 0) {
        this.swipes.splice(0, 1); // delete last value
      }
    }

    checkForStart = (target) => {
      if (this.swipes.length < 2)
        return false;
      var length = this.swipes.length; // length of sword

      var stroke1 = this.swipes[length - 1]; // latest stroke
      var stroke2 = this.swipes[length - 2]; // second-to-latest stroke
    
      /* calculate distance from strokes 1 & 2 from fruit */
      var d1 = this.p.dist(stroke1.x, stroke1.y, target.x, target.y);
      var d2 = this.p.dist(stroke2.x, stroke2.y, target.x, target.y);
    
      /* calculate distance from stroke1 to stroke2 */
      var d3 = this.p.dist(stroke1.x, stroke1.y, stroke2.x, stroke2.y);
      var sliced = (d1 < target.size || 			// if stroke1 lands directly on the fruit
                  ((d1 < d3 && d2 < d3) && 	// if the fruit falls between stroke1 and stroke2
                  (d3 < BLADE_LENGTH)));// if there is a new stroke, don't connect the two
      console.log('sliced', sliced)
    
      return sliced;
    }

    checkForSlice = (fruit) => {
      if (fruit.sliced || this.swipes.length < 2)
        return false;
      var length = this.swipes.length; // length of sword

      var stroke1 = this.swipes[length - 1]; // latest stroke
      var stroke2 = this.swipes[length - 2]; // second-to-latest stroke
    
      /* calculate distance from strokes 1 & 2 from fruit */
      var d1 = this.p.dist(stroke1.x, stroke1.y, fruit.position.x, fruit.position.y);
      var d2 = this.p.dist(stroke2.x, stroke2.y, fruit.position.x, fruit.position.y);
    
      /* calculate distance from stroke1 to stroke2 */
      var d3 = this.p.dist(stroke1.x, stroke1.y, stroke2.x, stroke2.y);
      var sliced = (d1 < fruit.size || 			// if stroke1 lands directly on the fruit
                  ((d1 < d3 && d2 < d3) && 	// if the fruit falls between stroke1 and stroke2
                  (d3 < BLADE_LENGTH)));// if there is a new stroke, don't connect the two
      console.log('sliced', sliced)
      fruit.sliced = sliced; // update fruit's property
    
      return sliced;
    }

    swing = (x,y) => {
      this.swipes.push(this.p.createVector(x,y));
    }
  
    // Display plath
    display() {
      var length = this.swipes.length;

      for (var i = 0; i < length; i++) {

        var s = this.p.map(i, 0, length, 2, 20); // shrink dots

        this.p.noStroke();
        this.p.fill(this.color);
        this.p.ellipse(this.swipes[i].x, this.swipes[i].y, s);
  }
    }
  }