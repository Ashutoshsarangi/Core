console.log('Hello');

function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  // Lets Try to add With Prototype
  // this.calcPerimeter = () => {
  //   console.log(`perimeter of ${this.name} is ${this.sides * this.sideLength}`);
  // }
}
Shape.prototype.calcPerimeter = function () {
  console.log(`perimeter of ${this.name} is ${this.sides * this.sideLength}`);
}
let s = new Shape('Square', 4, 5);
s.calcPerimeter();
let t = new Shape('Triangle', 3, 3);
t.calcPerimeter();

class ShapeClass {
  name;
  sides;
  sideLength;
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sideLength = sideLength;
    this.sides = sides;
  }
  calcPerimeter() {
    console.log(`I am Inside Class Now And perimeter of ${this.name} is ${this.sides * this.sideLength}`);
  }
}

let sq = new ShapeClass('Square', 4, 5);
sq.calcPerimeter();

let tr = new ShapeClass('Triangle', 3, 3);
tr.calcPerimeter();

class SquareClass extends ShapeClass {
  sideLength;
  constructor(sideLength) {
    super('SQUARE', 4);
    this.sideLength = sideLength;
  }
  calcArea() {
    console.log(`Area of The ${this.name} is ${this.sideLength * this.sideLength}`);
  }
}

let a = new SquareClass(5);
a.calcArea();
a.calcPerimeter();
