
var programminglanguages = ["JavaScript", "Python", "PHP"];

console.log(programminglanguages);
var numrat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numrat);

console.log(programminglanguages[1]);

programminglanguages.push("Java");

numrat.push(11);

document.write(programminglanguages);
document.write(numrat);

numrat.pop();

console.log(numrat);

programminglanguages.unshift("C#");
console.log(programminglanguages);

programminglanguages.shift();
console.log(programminglanguages);

programminglanguages.splice(1, 2, "C++");
console.log(programminglanguages);

var students = ["strella", "cimaa", "lecii"];
var [s1 , s2, s3] = students;

console.log(s1);
console.log(s2);
console.log(s3);


var places = ["Paris", "New York", "Tokyo", "London", "peja", "Rome", "Barcelona", "vushtrri", "mitrovic", "prishtina", "berlin", "amsterdam", "madrid", "dublin", "vienna", "prague", "budapest", "warsaw", "copenhagen", "stockholm"];
var [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20] = places;

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);
console.log(p7);
console.log(p8);
console.log(p9);
console.log(p10);
console.log(p11);
console.log(p12);
console.log(p13);
console.log(p14);
console.log(p15);
console.log(p16);
console.log(p17);
console.log(p18);
console.log(p19);
console.log(p20);