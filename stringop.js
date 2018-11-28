/*ternary operator:
syntax:
(test condition) ? blocl1 :block2
if test condition is true , block1 gets executed else block2
*/

/*var username= "prabha";

var result= username.length<8 ? "username should atleast be 8 characters" : "saved";

console.log(result); */


/*var password="prabha";

var result= password.endsWith ('@') ? "ok" : "enter @ at the end" ;

console.log(result); */

/*function checkforspecialcharacters(input)
{
    if(input.includes('$')) | 
} */

/*var mobnum="76609909";

var result = mobnum.length == 10 ?  "call" : "should be atleast 10 numbers" ;

console.log(result); */

/*var username="prabha";
var password="pppp";
var username_db="prabha";
var password_db="pppp";
var result = username_db === "prabha" && password_db === "pppp" ? "valid user" : "invalid user" ;
console.log(result);*/

/*var username="prabha";
var password="pppp";
var username_db="praba";
var password_db="ppp";
var result = username_db === "prabha" || password_db === "pppp" ? "valid user" : "invalid user" ;
console.log(result); */

function Employee(name,address){
    this.name=name;
    this.address=address;
}
var emp1=new Employee("ram","hyd");
console.log(emp1 instanceof Employee);
console.log(emp1 instanceof String);

