// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
const add = ()=>{
  const a = 10;
  const b = 10;
  let c = a+b;
  return c;
}
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

  it('Addition of two numbers', function(){

    

    assert.equal(add(),20);

  });

  it('Subtraction of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a-b;

    assert.equal(c,0);


  });

  it('Multiplication of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a*b;

    assert.equal(c,100);


  });

  it('Division of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a/b;

    assert.equal(c,1);


  });

});