/* function switchcase(a) {
    var val1=document.getElementById("v1").value;
    var val2=document.getElementById("v2").value;
    val1 =Number(val1);
    val2 =Number(val2);
    var v;
    if (a != '/'){
        switch(a){
            case '+':
            v = val1+val2;
            break;
            case '-':
            v = val1-val2;
            break;
            case '*':
            v = val1*val2;
            break;
        }
    }else {
        let x=val1 / val2;
        let y= val1 % val2;
        v =("quotient"+x+"reminder"+y);
    }
return document.getElementById("calc").innerHTML=v;
} */

function funcall(){
    document.getElementById("uname").innerHTML=document.getElementById("Username").value;
    document.getElementById("f1name").innerHTML=document.getElementById("fname").value;
    document.getElementById("lasname").innerHTML=document.getElementById("lname").value;
    document.getElementById("mail").innerHTML=document.getElementById("email").value;
    document.getElementById("birthdate").innerHTML=document.getElementById("DOB").value;
    document.getElementById("contact").innerHTML=document.getElementById("phone").value;
}


function loops() {
    var val= document.getElementById("inp").value;
    for (val;val<=10;val++)
    if(val<=9){
        console.log(val);
    }else{
        console.log("loop stopped");
    }
}