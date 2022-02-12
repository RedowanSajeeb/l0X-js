/*/# problem solving-1 */
function  anaToVori (ana){
    if ( ana < 0 || typeof (ana) != "number"){
        return "error 404- please enter a valid numeric consignment number!"
    }
    var vori = ana / 16 ;
    return vori;
}
var anaToVoriConvart = anaToVori (32);
console.log(anaToVoriConvart);

/*/## problem solving-2 */
function pandaCost (singara , samucha ,  jilapi){
    if ( (typeof singara != "number" || singara < 0) || (typeof samucha != "number" || samucha <0) || (typeof jilapi != "number" || jilapi <0) ){
        return "error 404- please enter a valid number"
    }
    let sungSamJilaTotal =( singara * 7)  + (samucha * 10) + ( jilapi * 15 );
    let calculation = sungSamJilaTotal;
    return calculation ;
}
let  sungSamJilaAddtoCart = pandaCost ( 15 , 12 , 5 );
console.log(sungSamJilaAddtoCart);

/*/#### problem solving-3 */
function picnicBudget (members){
    if ( typeof members != "number" || members <0){
        return "error 404- please enter a valid number"
    }
    const firstStepEveryOneMoney = 5000;
    const secStepEveryOneMoney = 4000;
    const thirdStepEveryOneMoney = 3000;
if ( members <=100 ){
        const countFirst = members * firstStepEveryOneMoney;
        return countFirst ;
 }
else if (members <= 200){
        const multiplyFirstStep = 100 * firstStepEveryOneMoney ;
        const secStepMembersCount = members - 100 ;
        const multiplySecStep = secStepMembersCount * secStepEveryOneMoney ;
        const totalSecStep = multiplyFirstStep + multiplySecStep ;
        return totalSecStep ;
}
else {
        const multiplyFirstStep = 100 * firstStepEveryOneMoney ;
        const multiplySecStep = 100 * secStepEveryOneMoney ;
        const multiplyThirdStepMembers = members - 200 ;
        const multiplythirdStep = multiplyThirdStepMembers * thirdStepEveryOneMoney ;
        const totalMultipay =  multiplyFirstStep + multiplySecStep + multiplythirdStep ;
        return totalMultipay ;
    }
}
const atLestpay = picnicBudget (201);
console.log(atLestpay);

/*/####problem solving-4 */
function oddFriend (friendsName){
    if ( typeof friendsName =="number"){
        return "error 404- please enter a valid string"
    }
    for (var i = 0; i < friendsName.length; i++) {
        var friend = friendsName[i];
        if (friend.length % 2 !=0) {
            return friend;
        }
    }
}
const frindsArray = oddFriend ([ "Redowan-",  "Riyad-Hossain", "redowox", "doreXyaNx, mnxx"]);
console.log (frindsArray);


