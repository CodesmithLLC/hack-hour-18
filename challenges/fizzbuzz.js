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
    const returnArray=[];
    for (let i = 1; i <= num; i++){
        let buzzTrue = i % 5 === 0;
        let fizzTrue = i % 3 === 0;
        if (buzzTrue && !fizzTrue) {
            returnArray.push('buzz');
        } else if (fizzTrue && !buzzTrue){
            returnArray.push('fizz');
        } else if (fizzTrue && buzzTrue){
            returnArray.push('fizzbuzz');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

module.exports = fizzbuzz;
