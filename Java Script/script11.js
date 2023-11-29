

// object kullanımı

let val,val2,val3,val4,val5,val6,val7,val8,val9,val10;

let person={
    firstname: 'istanbul',
    lastname : 'kütahya',
    age:10,
    hobbies:['kitap','spor','müzik'],
    address:{
        city:'istanbul',
        country:'türkiye'
    },
    getbirthday: function(){
        return 2023-this.age; //this.age diyerek tanımlı olan person object nesnesi içindeki değeri al diyoruz
    }
};

val1 =person.firstname;
val2 =person.lastname;
val3 =person['firstname']; // bu şekilde yazıncada firstname'de hangi değer var ise onu yazar
val4=person.age;
val5=person.hobbies;
val6=person.hobbies[1];
val7=person.hobbies.length,
val8=person.address;
val9=person.address.city;
val10=person.getbirthday();



console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);
console.log(val8)
console.log(val9);
console.log(val10);
console.log(person);
console.log(typeof person);

let people=[
    {firstname: 'ankara',lastname:'mamak'},
    {firstname: 'istanbul',lastname:'mamak'},
    {firstname: 'edirne',lastname:'mamak'}
];
console.log(people);

let p1=people[2];
let p2=people[2].firstname;
console.log(p1); // dizi içerisindeki 2. index'te var olan değerleri getirir
console.log(p2);


// people dizi içerisindeki dizi değerlerine for dögüsü ile erişiyoruz
for(let j=0; j<people.length; j++)
{
  console.log(people[j]);
}

for(let i=0; i<people.length; i++)
{
  console.log(people[i].firstname);
}