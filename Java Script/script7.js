

// string template literals

const fullname='deneme1 deneme2';

const city='istanbul';
const yearofbirth=1984;

let val;

val='my name is '+fullname+'I\'m '+(2023-yearofbirth)+' years old '+' and I live in '+city;

val=`my name is ${fullname} I'm ${2023-yearofbirth} yeas old and I live in ${city}`;

// ternary operatoru şart true ise over 18 false ise under 18 çalışacak
val=`my name is ${fullname} I'm ${2023-yearofbirth>=18?'over 18':'under 18'} yeas old and I live in ${city}`;

console.log(val);