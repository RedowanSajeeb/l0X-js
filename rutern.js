function Nredo ( first , secnd , therd){
    if ( first > secnd && first > therd){
        return first;
    }
    else if ( secnd >first && secnd > therd){
        return secnd ;
    }
    else ( therd > first && secnd > therd) 
        return therd ;
    
}
var result = Nredo ( 100 , 500 , 300);
console.log(result);
// ----------------
// function Nredo ( first , secnd , therd){
//     if ( first < secnd && first < therd){
//         return first;
//     }
//     else if ( secnd < first && secnd < therd){
//         return secnd ;
//     }
//     else ( therd < first && secnd < therd) 
//         return therd ;
    
// }
// var result = Nredo ( 100 , 500 , 300);
// console.log(result);
