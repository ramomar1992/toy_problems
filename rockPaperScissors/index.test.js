/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of num.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

/**
 *
 * @param {number} num the number of trails the player does
 * @param {Array} variation strings represents all possible results
 * for each single trail
 * @returns {Array} array of arrays to all possible outcome for all trails
 */

const rockPaperScissors = function(
    num,
    vriation = ['rock', 'paper', 'scissor'],
) {
  if (num == 0) return [];
  const result = [];
  const res = [...rockPaperScissors(num - 1, vriation)];
  for (let i = 0; i < vriation.length; i++) {
    if (res.length > 0) {
      for (let j = 0; j < res.length; j++) {
        result.push([vriation[i], ...res[j]]);
      }
    } else {
      result.push([vriation[i]]);
    }
  }
  return result;
};

const rockPaperScissors2 = function(num) {
  const plays = ['rock', 'paper', 'scissors'];

  // store all plays arr of arrs
  const outcomes = [];

  // recursive function
  const getOutcomes = (roundsLeft, playsSoFar) => {
    // base case
    if (roundsLeft === 0) {
      outcomes.push(playsSoFar);
    } else {
      // for over each play
      for (let i = 0; i < plays.length; i++) {
        getOutcomes(roundsLeft - 1, playsSoFar.concat(plays[i]));
      }
    }
  };

  getOutcomes(num, []);
  return outcomes;
};


describe('rockPaperScissors function', () => {
  it('sohuld return the number of all trails', () => {
    expect(rockPaperScissors(3).length).toStrictEqual(27);
    expect(rockPaperScissors(0).length).toStrictEqual(0);
    expect(rockPaperScissors(2).length).toStrictEqual(9);
    expect(rockPaperScissors(5).length).toStrictEqual(243);
  });
});
