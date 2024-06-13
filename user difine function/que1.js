//  add
function add(num1, num2) {
    return num1 + num2;
  }
  
  //  subtract 
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  //  multiply 
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // divide
  function divide(num1, num2) {
    if (num2 === 0) {
      return "Error: Cannot divide by zero.";
    }
    return num1 / num2;
  }
  
  let number1 = 10;
  let number2 = 5;
  
  console.log("Addition:", add(number1, number2));
  console.log("Subtraction:", subtract(number1, number2));
  console.log("Multiplication:", multiply(number1, number2));
  console.log("Division:", divide(number1, number2));
  