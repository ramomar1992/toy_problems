/* eslint-disable max-len */
/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  const denoms = [2, 3, 5, 7];

  for (let i = 0; i < denoms.length; i++) {
    if (n % denoms[i] === 0 && n !== denoms[i]) {
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

/**
 * @function primesTo
 * @description a function that takes a number and return an array of all prime numbers between 2 up to it.
 * @param {number} n a number up to which you want an array of prime numbers
 * it should be more than or equal 2
 * @return {[number]} array of all prime numbers up to the number you specify
 */
function primesTo(n) {
  if (n < 2) {
    return [];
  }
  const res = [2];
  if (n === 2) {
    return res;
  }
  for (let i = 3; i < n +1; i+=2) {
    if (primeTester(i)) {
      res.push(i);
    }
  }
  return res;
}

describe('primeTester', () => {
  it('should return true when given a prine number', () => {
    expect(primeTester(2)).toStrictEqual(true);
    expect(primeTester(19)).toStrictEqual(true);
    expect(primeTester(173)).toStrictEqual(true);
  });
  it('should return false when given a non-prine number', () => {
    expect(primeTester(1)).toStrictEqual(false);
    expect(primeTester(15)).toStrictEqual(false);
    expect(primeTester(1000000000000)).toStrictEqual(false);
  });
});

describe('primesTo', () => {
  it('should return an array of all prime numbers up to n', () => {
    expect(primesTo(2)).toStrictEqual([2]);
    expect(primesTo(3)).toStrictEqual([2, 3]);
    expect(primesTo(50)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });
  it('should return empty array for numbers less than 2', () => {
    expect(primesTo(0)).toStrictEqual([]);
    expect(primesTo(-90).length).toStrictEqual(0);
  });
});
