function findGrade1(m,k){

var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(k,mark); // output


}

findGrade1(90,"ahamed");