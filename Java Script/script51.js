

/* map kullanımı ES6 ile geliyor ----key/value pairs (collection)*/

let val;


const number=new Map();

/*anahtar value mantığı ile değer tutuyor */
number.set(1,'bir');
number.set(2,'iki');
number.set(3,'üç');
number.set('dört','dört');

val=number;
val=number.get(1); /*key değerine göre value değerini getiriyor */
val=number.size; /*size bize kaç elemanlı olduğunun bilgisini verir number.size; eleman sayısını verir */
val=number.has(1); /*verilen key değerinin var olup olmadığına bakar varsa true yoksa false döner */
//val=number.delete(1); /*verilen key değerine göre elemanı listeden çıkarır siler */
//number.clear(); /*tüm listeyi temizler tüm elemanları siler */
console.log(val);

for(var [key,value] of number)
{
    console.log(key+' = '+value);
}

for(var [key,value] of number.entries())
{
    console.log(key+' = '+value);
}

for(var key of number.keys())
{
    console.log(key);
}

for(var value of number.values())
{
    console.log(value);
}

number.forEach(function(key,value){
     console.log(key+' - '+value);
});

var first = new Map([
    [1,'bir'],
    [2,'iki'],
    [3,'üç'],
]);

var second=new Map([
   [4,'dört'],
   [5,'beş'],
]);

/*iki tane diziyi birleştirdik */
var birlesim=new Map([...first,...second]);

console.log(birlesim);