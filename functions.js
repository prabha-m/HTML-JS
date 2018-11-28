/* function is a block of code which is used to perform some action
synatx:
function function_name(parameters){
    code
} */
// function with parameters and return
// function multiply(a,b){
//     var res=a*b;
//     return res;
// }
// console.log(multiply(1,2))

//function without parameters and with return
// function getName(){
//     console.log("DgitalLync");
// }
// getName();

//function with parameters and without return
// function modulus(a,b){
//     var x= a%b;
//     console.log(x);
// }
// modulus(15,4);

//functions without parameters and without return
// function x(){
//     console.log("submit");
// }
// x();

// function expressions:
// If a function without name is assigned to a variable

// var click= function(){
//     console.log("submit");
// }

// function x(a){
//     a();
// }
// x(click)

// function outer(){
//     var x=10;
//     console.log(x);
//         function inner(){
//             var y=29;
//             console.log(y);
//         }
//         inner();
// }
// outer();

// If we pass a function as a parameter to another function it is called as first class function

// Immediately Invoked Function Expression
(function(){
    console.log("javascript");
})()