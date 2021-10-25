/* eslint-disable max-len */
/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/

/**
 * @description this method is array prototype to check weather the array is a subset of an input array or not
 * @param {*} arr Array of any non-object type String | Number | Boolean | null | undifined
 * @returns boolean weather this array is a subset of the input array or not.
 */

// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    map.set(element, 0);
  }
  for (let i = 0; i < this.length; i++) {
    const legend = this[i];
    const val = map.get(legend);
    if (val === undefined) {
      return false;
    }
  }
  return true;
};

describe('isSubsetOf array prototype', () => {
  it('should return true or array subset', () => {
    const a = ['commit', 'push', null];
    expect(a.isSubsetOf(['commit', 'rebase', 'push', 'blame', null])).toStrictEqual(true);
    const b = ['merge', 'reset', 'reset', undefined];
    expect(b.isSubsetOf(['reset', 'merge', 'add', 'commit', undefined])).toStrictEqual(true);
  });
  it('should return false for non subsets', () => {
    const a = ['commit', 'push', 'pull'];
    expect(a.isSubsetOf(['commit', 'rebase', 'push', 'blame'])).toStrictEqual(false);
    const b = ['merge', 'reset', 'reset', 0];
    expect(b.isSubsetOf(['reset', 'merge', 'add', 'commit'])).toStrictEqual(false);
  });
});
