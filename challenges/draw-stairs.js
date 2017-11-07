/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======
 
 For example:     
 drawStairs(6) ->          
>>>>>>> 8e9e4b2f9b61581fd7fde4cdeb41f4d885d099fb
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
<<<<<<< HEAD
  if(n!==undefined||n!==null){
    for(let i=1;i<=n;i++){
      let logme = ""
      let numofspaces = n-i;
      let numofstars = i;
      for(let i=1;i<=numofspaces;i++){
        logme += " ";
      }
      for(let i=1;i<=numofstars;i++){
      logme += "*";
      }
      console.log(logme);
    }
  }else{
    return "error bad num";
  }
=======

>>>>>>> 8e9e4b2f9b61581fd7fde4cdeb41f4d885d099fb
}


module.exports = drawStairs;
