

// döngü örnekleri

let cars=['bmw','mercedes','audi','porche'];

let people= [
    {firstname:'deneme1',lastname:'deneme2'},
    {firstname:'deneme3',lastname:'deneme4'},
    {firstname:'deneme5',lastname:'deneme6'}
];

// for-in
for(let i in cars)
{
    console.log(i);  // dizinin index numaralarını verdi
}
// for-in
for(let z in cars)
{
    console.log(`index: ${z} value: ${cars[z]}`);  // dizinin index numarasını ve o indexte olan tanımı verir
}


for(let y=0; y<cars.length;y++)
{
    console.log(cars[y]);  // burada da verilen index değerinde hangi tanım var ise o tanımı verir
}

// foreach
// dizideki elemanları verir
cars.forEach(function(item){
    console.log(item);
});

// for-in
for(let p=0;p<people.length;p++)
{
    console.log(people[p].firstname);
}

for(let k in people)
{
    console.log(people[k].lastname);
}

// foreach
people.forEach(function(item){
console.log(item.firstname);
});

// foreach
people.forEach(function(item){
    console.log(item.lastname);
    });


// map - geriye array döndürür foreach gibi kullanıyoruz fakat geriye array döndürür

let val=people.map(function(item){
     return item.firstname+' '+item.lastname;
});
console.log(val);