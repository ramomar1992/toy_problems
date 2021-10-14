/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:

Note : using sort native is not allowed

Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/

/**
 * @description Function takes in an array of numbers
 * and returns The second maximum number in the array
 * @param {array} array Array of numbers
 * @return {number} number
 */

const secondMax = function (array) {
  let firstMax = array[0];
  let secondMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > firstMax) {
      secondMax = firstMax;
      firstMax = array[i];
    } else if (
      array[i] > secondMax ||
      (firstMax === secondMax && array[i] !== secondMax)
    ) {
      secondMax = array[i];
    } else {
      continue;
    }
  }
  return secondMax !== firstMax ? secondMax : null;
};

describe("secondMax function", () => {
  it("should return the second max number in each array of numbers", () => {
    expect(secondMax([1, 5, 2])).toEqual(2);
    expect(secondMax([-1, -5, 2])).toEqual(-1);
    expect(secondMax([-1, -5, 2, 5])).toEqual(2);
    expect(secondMax([15, 20 - 3, 133, 50, 32])).toEqual(50);
    expect(secondMax([100, 133, 50, 32])).toEqual(100);
    expect(secondMax([133, 50, 32])).toEqual(50);
    expect(secondMax([100, 100, 100])).toEqual(null);
  });
});
