function square(n) {
    console.log("hi there");
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function quad(n) {
    return n * n * n * n;
  }
  
  // noob way to calling funtion
  // function sumOfSquares(a, b) {
  //   let square1 = square(a);
  //   // 1 ^ 1 = 1
  //   let square2 = square(b);
  //   // 2 ^ 2 = 4
  //   return square1 + square2;
  //   // 1 + 4 = 5
  // }
  
  // function sumOfCubes(a, b) {
  //   let square1 = cube(a);
  //   // 1 ^ 1 ^ 1 = 1
  //   let square2 = cube(b);
  //   // 2 ^ 2 ^ 2 = 8
  //   return square1 + square2;
  //   // 1 + 8 = 9
  // }
  
  // let ans1 = sumOfSquares(1, 2);
  // console.log(ans1);
  
  // Above code is good but there is a code repeataion and thats not good
  
  // a generic way to calling above funtions is
  
  function sumOfSomething(a, b, fn) {
    let square1 = fn(a);
    // 1 ^ 1 = 1
    let square2 = fn(b);
    // 2 ^ 2 = 4
    return square1 + square2;
    // 1 + 4 = 5
  }
  
  // calling a funtional as argument
  let ans = sumOfSomething(1, 3, quad);
  console.log(ans);
  