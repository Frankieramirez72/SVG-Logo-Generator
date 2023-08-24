class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  //these are the shape extensions that return the appropriate design based on the user input
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="50,180 250,180 150,40" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };