//variable

var a = "cat";
// let b = 12;
// const c = 34.6;

{
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // a = "bat";
    // b = 13;
    // // c = 35;
    // console.log(a);
    // console.log(b);
}

// console.log(a);
// console.log(b);

// string
var name = "Aunchayika";
var id = '630410076';

var a = "1";
var b = "2";
console.log(a + " " + b);

// number
var a = 1;
var b = 2;
console.log(a + b);

// array
var c = ["aunchayika", 1456, "cmu"];
console.log(c[0]);

// object
var d = {
    // key: value
    name: "Aunchayika",
    id: 630410076,
    University: "CMU"
}
console.log(d.id);

// array object
var e = [{ name: "ponpan", id: 1 },
{ name: "bb", id: 2 },
{ name: "F", id: 3 },
{ name: "GT", id: 4 }];
console.log(e[0].name);

// loop
// forEach
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(i => console.log(i));

// for loop
for (var i = 1; i <= 10; i++) { console.log(i) }

// while loop
var i = 1;
while (i <= 10) { console.log("while", i); i += 1 }

// if condition
var f = 0;
if (f == 0) { console.log("yes") }
else { console.log("no") }

// ver value = 80;
// if (value > 79) { console.log("A") }
// else if (value >= 70) { console.log("B") }
// else if (value >= 60) { console.log("C") }
// else (value < 50) { console.log("D") }

f == 0 ? console.log("yes") : console.log("no")