// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
function RightTriangle(side1, side2, base) {
    this.side1 = side1;
    this.side2 = side2;
    this.base = base;
    this.area = function() {
      return side1 * side2;
    };
    this.perimeter = function() {
      return 2 * (side1 + side2)
    };
}
var rightTriangleOne = new RightTriangle(1, 2 , 3);
var rightTriangleTwo = new RightTriangle(4, 5, 6);
