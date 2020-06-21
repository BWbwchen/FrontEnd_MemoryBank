import React from 'react';
export default class Particle extends React.Component {
    constructor(p, position, force, hue, drag, lifespan) {
      this.p = p;
      this.position = p.createVector(position.x, position.y);
      this.velocity = p.createVector(force.x, force.y);
      this.lifespan = lifespan;
      this.force = force;
      this.drag = drag;
      this.hue = hue;
  
      this.start = Date.now();
    }
  
    update() {
      // Move it
      this.position.add(this.velocity);
  
      // Slow it down
      this.velocity.mult(this.drag);
  
      // Fade it out
      let dt = Date.now() - this.start;
      let vel = 0.01 * dt;
      this.lifespan = this.lifespan - vel;
    }
  
    // Draw particle and connect it with a line
    // Draw a line to another
    display(other) {
      this.p.stroke(0, this.lifespan);
      this.p.fill(0, this.lifespan / 2);
      this.p.ellipse(this.position.x, this.position.y, 8, 8);
  
      // If we need to draw a line
      if (other) {
        this.p.line(
          this.position.x,
          this.position.y,
          other.position.x,
          other.position.y
        );
      }
    }
  }