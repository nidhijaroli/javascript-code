//  calculate area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // calculate  area of a triangle
  function calculateTriangleArea(base, height) {
    return (base * height) / 2;
  }
  
  //calculate  area of a circle
  function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  let rectangleLength = 5;
  let rectangleWidth = 3;
  let triangleBase = 4;
  let triangleHeight = 6;
  let circleRadius = 2;
  
  console.log("Rectangle Area:", calculateRectangleArea(rectangleLength, rectangleWidth));
  console.log("Triangle Area:", calculateTriangleArea(triangleBase, triangleHeight));
  console.log("Circle Area:", calculateCircleArea(circleRadius));
  