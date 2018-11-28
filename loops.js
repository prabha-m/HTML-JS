// loops are used to repeat the statements based on a condition
/*syntax:while(test condition){
    statement;
    iteration;
} */
// ctrl+c to exit out of an infinite loop
/*var i=1;
while (i<11){
    console.log(i);
    i++;
}*/

/*var users=["user1","user2","user3"] ;
var length=users.length;
console.log(length);
var initialValue=0;
while(initialValue<length){
    console.log(users[initialValue]);
    initialValue++;
}*/
// do-while loop
/*var i=0;
do {
    console.log(i);
    i++;
}while(i<=10) */

// var courses=["python","html","javascript","css"];
// var length=courses.length;
// for (i=0;i<length;i++){
//     console.log(courses[i]);
// }

function x(){
    function y(){
        switch(1){
            case 1: console.log("abc");
            return;
            case 2: console.log("efg");
        }
        console.log("hello");
    }
    y();
    console.log("after y");
}
x();