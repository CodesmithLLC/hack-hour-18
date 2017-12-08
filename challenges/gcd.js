/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    function divisor(num){
        let array = [];
        for (let i = 1; i <= num; i++){
            if (num % i === 0) {
                array.push(i);
            }
        }
        return array;
    }
    let arrayA = divisor(a);
    let arrayB = divisor(b);
    let commonArr = arrayA.filter((value) => arrayB.indexOf(value) !== -1);
    return Math.max(...commonArr);
}

module.exports = gcd;