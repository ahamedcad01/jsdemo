 console.log("welcome to js");

var a = 10;
let c = 20;

const d = 3.14;


a = true;
console.log(typeof a);

var b = parseInt(a);
console.log(typeof b);


var a = "100";
console.log(typeof a);

a  = parseInt(a);
console.log(a,typeof a);

var n = a.toString();
console.log(n,typeof n);

var v = 10;
console.log(v++);
var v1 = 20;
console.log(v);
var a = 10;
var m = a << 2;
console.log(m);


function checkvalue(a){
    console.log(a);
    var a=Number(a);
switch(a){

    case 1:
        console.log("formal collections");
        break ;
    case 2:
        console.log("casual collections");
        break ;
    default:
        console.log("main menu");
        break ;

}
}
checkvalue(prompt("enter value"));
