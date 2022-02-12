const number = [ 50, 20, 60, 90, 70, 500];
let sum = 0 ;
for ( let i = 0; i < number.length; i++){
    const elimnts = number[i];
 sum = elimnts + sum ;
}
console.log(sum);

// ---------- function

function NamBer ( berNum){
    let sums = 0;
    for ( let i = 0 ; i< berNum.length ; i++){
        const namElimnts = berNum[i];
sums = sums + namElimnts ;
    }
    return sums;
}
const nammbrs= [400, 30,  40, 7, 40, 2]
const toatl = NamBer (nammbrs );
console.log(toatl);


// ------------------------------