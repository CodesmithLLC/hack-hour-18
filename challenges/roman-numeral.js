/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let splitarray = (n).toString(10).split("").map(function(t){return parseInt(t)});
    let holderarray = [];
    let finalstring = ""; 
    
    let i = splitarray.length-1;

         if(splitarray[i]<4 && splitarray[i]>0){
             holderarray.push("I"*splitarray[i]);
         }else if(splitarray[i]===4){
             holderarray.push("IV");
         }else if(splitarray[i]>4 && splitarray[i]<9){
             holderarray.push("V");
             holderarray.push("I"*(splitarray[i]-5));
         }else if(splitarray[i]===9){
             holderarray.push("IX");
         }else if(splitarray[i]===0){
             holderarray.push("X");
             i--;
         }

         if(splitarray[i-1]<4 && splitarray[i-1]>0){
             holderarray.splice(0,0,("X"*splitarray[i-1]));
         }else if(splitarray[i-1]===4){
             holderarray.splice(0,0,"XL");
         }else if(splitarray[i-1]===5){
             holderarray.splice(0,0,"L");
         }else if(splitarray[i-1]>5 && splitarray[i-1]<9){
             holderarray.splice(0,0,("L"+("X"*splitarray[i-1]-5)));
         }else if(splitarray[i-1]<)

             


    return holderarray.join("");

}

module.exports = romanNumeral;
