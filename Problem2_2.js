//Give grade from score
let marks = prompt("Enter marks");
if(marks>=90 && marks<=100) {
    console.log("A");
}
else if(marks>=70 && marks<=89) {
    console.log("B");
}
else if(marks>=60 && marks<=69) {
    console.log("C");
}
else if(marks>=50 && marks<=59) {
    console.log("D");
}
else if(marks>=0) {
    console.log("F");
}