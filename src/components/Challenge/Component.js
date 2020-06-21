import React from 'react';
import Particle from "./test.js"
  
  // A Path is a list of particles
  export default class Paths extends React.Component {
    constructor(p) {
      this.particles = [];
      this.p = p;
    }
  
    // Add a new particle with a position, force, and hue
    add(particle) {
      this.particles.push(particle);
    }
  
    // Display plath
    update() {
      for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
      }
    }
  
    // Display plath
    display() {
      // Loop through backwards
      for (var i = this.particles.length - 1; i >= 0; i--) {
        // If we shold remove it
        if (this.particles[i].lifespan <= 0) {
          this.particles.splice(i, 1);
        } else {
          // Otherwise, display it
          this.particles[i].display(this.particles[i + 1]);
        }
      }
    }
  }