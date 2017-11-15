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
    if(n <= 0){return undefined}
    let result = [];
    work = n;
    if (Math.floor(work/1000) >= 1){
      for(var i = 0; i < Math.floor(work/1000); i++){result.push('M')}
      work = work - Math.floor(work/1000) * 1000
    }
    if (Math.floor(work/500) >= 1){
      for(var i = 0; i < Math.floor(work/500); i++){result.push('D')}
      work = work - Math.floor(work/500) * 500
    }
    if (Math.floor(work/100) >= 1){
      for(var i = 0; i < Math.floor(work/100); i++){result.push('C')}
      work = work - Math.floor(work/100) * 100
    }
    if (Math.floor(work/100) >= 1){
      for(var i = 0; i < Math.floor(work/100); i++){result.push('C')}
      work = work - Math.floor(work/100) * 100
    }
    if (work >= 90){ result.push('XC')
      work = work - 90
    }
    if (work >= 80){ result.push('LXXX')
      work = work - 80
    }
    if (work >= 70){ result.push('LXX')
      work = work - 70
    }
    if (work >= 60){ result.push('LX')
      work = work - 60
    }
    if (work >= 50){ result.push('L')
      work = work - 50
    }
    if (work >= 40){ result.push('XL')
      work = work - 40
    }
    if (work >= 30){ result.push('XXX')
      work = work - 30
    }
    if (work >= 20){ result.push('XX')
      work = work - 20
    }
    if (work >= 10){ result.push('X')
      work = work - 10
    }
    if (work === 9){result.push('IX')}
    if (work === 8){result.push('VIII')}
    if (work === 7){result.push('VII')}
    if (work === 6){result.push('VI')}
    if (work === 5){result.push('V')}
    if (work === 4){result.push('IV')}
    if (work === 3){result.push('IX')}
    if (work === 2){result.push('II')}
    if (work === 1){result.push('I')}
    
    return result.toString().replace(/,/g,'')
    }

module.exports = romanNumeral;
