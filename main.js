// var userName = ("Mohammad")
// var password = 123456

// var userinput = prompt("enter your userName")
// var passwordinput = Number(prompt("enter your password"))

// if (userName == userinput){
//     console.log("yaur userName is true");
// }else{
//     console.log("yaur userName is false");
// }

// if (password  == passwordinput){
//     console.log("yaur password is true");
// }else{
//     console.log("yaur pasword is false");
// }

// var num1 = Number(prompt("enter your Number1"))
// var num2 = Number(prompt("enter your Number2"))

// var operand = prompt("enter - + / *")

// switch  (operand){
//     case "+" :{
//         console.log(num1 + num2);
//         break
//     }
//     case "-" :{
//         console.log(num1 - num2);
//         break
//     }
//     case "*" :{
//         console.log(num1 * num2);
//         break
//     }
//     case "/" :{
//         console.log(num1 / num2);
//         break
//     }
//     default: {
//         console.log("eror");
//     }
// }
function me(Income,hour,tax){
    var salary = hour * Income ;
    var netIncome = salary - (tax * salary / 100)
    console.log(`with degree ${Degree} your income is ${netIncome}`);
}

var Degree = prompt("enter your Degree")
var hour = Number(prompt("enter your hour"))
var Income = Number(prompt("enter your Income"))

switch (Degree) {
    case "phd" :{
        me(Income,hour,20)
        break
    }
    case "master" :{
        me(Income,hour,15)
        break
    }
    case "bachlor" :{
        me(Income,hour,10)
        break
    }
    case "diploma" :{
        me(Income,hour,5)
        break
    }
    case "sikl" :{
        me(Income,hour,0)
        break
    }

}


