/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(number){
    this.result += number;
  }
  subtract(number){
    this.result -= number;
  }
  multiply(number){
    this.result *= number;
  }
  divide(number){
    this.result /= number;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  calculate(expression) {
        // Strip out extra spaces and handle invalid characters
        const sanitizedExpression = expression.replace(/\s+/g, '');
        if (!/^[\d+\-*/().]*$/.test(sanitizedExpression)) {
            throw new Error("Invalid characters in expression.");
        }

        try {
            // Evaluate the expression safely using Function
            // This method is safer than eval as it does not allow access to local scope
            const result = Function('return (' + sanitizedExpression + ')')();
            this.result = result;
            return result;
        } catch (error) {
            throw new Error("Invalid expression.");
        }
    }

}

// Test the code
const calc = new Calculator();
try {
  calc.add(10);
  console.log(calc.getResult()); //10

  calc.subtract(5);
  console.log(calc.getResult()); //5

  calc.multiply(4);
  console.log(calc.getResult()); //20

  calc.divide(2);
  console.log(calc.getResult()); //10

  calc.clear();
  console.log(calc.getResult()); //0

  console.log(calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7")); // Should log: 23
} catch (e){
  console.error(e);
}

module.exports = Calculator;
