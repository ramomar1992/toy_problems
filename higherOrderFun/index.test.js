/* eslint-disable no-extend-native */
/* eslint-disable no-unused-vars */
/*
Problem 1:
Replace the native Array map function with your own.
It should work exactly the same way as Javascript built-in map function.
The map function works on the array and returns back a new array
where each element has been modified according to the results
of calling the callback function.
See example usage to understand what arguments are passed to the callback.
*/

Array.prototype.map = function(callback) {
  const arr = [...this];
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

/*
Example usage:
*/
const transform = function(element, index, array) {
  return array[index] + index + element;
};

/*
Problem 2:
Write an asynchronous sum function that accepts two numbers and a callback.
The function should wait 1 second, then calculate the sum of two numbers
and pass the result to the callback.
If 1st or 2nd argument is not a number, the function should call the callback
with the error message - a simple string that says "Incorrect argument(s)".
Please see example usage to understand what should be passed to the callback.
*/

const asyncSum = function(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      callback('Incorrect argument(s)', null);
    } else {
      callback(null, a + b);
    }
  }, 1000);
};
/*
Example use:
*/

const logNumber = function(error, number) {
  if (error) {
    return 'Error: ' + error;
  } else {
    return 'The total is: ' + number;
  }
};

describe('Array map', () => {
  it('should return a new array with the same number of elements', () => {
    const res = ['a', 'b', 'c'].map(transform);
    expect(res.length).toStrictEqual(3);
    expect(res).toStrictEqual(['a0a', 'b1b', 'c2c']);
  });
});

/*
Problem 3 (ADVANCED):
What kind of candy do you like?
Your answer:
*/
