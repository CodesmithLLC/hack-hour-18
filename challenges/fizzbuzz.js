// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    // Basic Solution
    const result = [];
    for (let i=1; i < num + 1; i++) {
        if (i % 15 === 0) {
            result.push('fizzbuzz');
        } else if (i % 3 === 0) {
            result.push('fizz');
        } else if (i % 5 === 0) {
            result.push('buzz');
        } else {
            result.push(i);
        }
    }
    return result;

    //
    // return [...Array(num).keys()].map(char => char + 1).map((int) => {
    //     int % 15 === 0 ? 'fizzbuzz' : int % 3 === 0 ? 'fizz' : int % 5 === 0 ? 'buzz' : int
    // });
}

module.exports = fizzbuzz;
