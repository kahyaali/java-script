

/*Arrow function ES6 Kullanımı */


/*ES5 ile olan kullanım */
let denemeES5=function()
{
    console.log('merhaba ES5');
}

denemeES5();

/*ES6 ile olan kullanım */

/*eğer tek bir ifade veya satır kullanacak isel süslü parantez kullanmayabiliriz birden fazla kod satırı olacak ise süslü
parantezleri kullanmak zorundayız */
let denemeeES6=()=>
    console.log('merhabaaa ES6');


let denemeES6=()=>{
    console.log('merhaba ES6');
}

denemeES6();
denemeeES6();

/*parametre alarak ES5 kullanımı */

let parametreES5=function(value)
{
   return value;
}

console.log(parametreES5(50));

/*parametre alarak ES6 kullanımı */

let parametreES6=(value1)=>{
    return value1;
}

console.log(parametreES6(100));

/*ES5 örnek */
 
let splitES5=function(deger)
{
    return deger.split(' '); /*verilen tanıma göre bölüp dizi olarak tutar */
}

console.log(splitES5('deneme1 deneme2 deneme3'));

/*ES6 örnek */

let splitES6=deger=> deger.split(' ');


console.log(splitES6('istanbul edirne kütahya'));

/*object literals ES5 */

let getUrunES5=function(id,name)
{
  return{
    index:id,
    urunadı:name
  }
}

console.log(getUrunES5(1,'dolap'));


/*object literals ES6 */
let getUrunES6=(id,name)=>(
    {
        index:id,
        urunadı:name
    }
);
console.log(getUrunES6(1,'araba'));

const telefon=[
    {name:'samung',fiyat:1000},
    {name:'alcatel',fiyat:500},
    {name:'oppo',fiyat:700},
    {name:'iphone',fiyat:3000}
];


/*ES5 */
let fiyatES5=telefon.map(function(rtelefon){
     return rtelefon; /*name ve fiyat döner */
     return rtelefon.name; /*burda sadece name döner */
     return rtelefon.fiyat; /*burda sadece fiyat döner */
});

console.log(fiyatES5);

/*ES6 */

let xfiyatES6=telefon.map(telefon=>telefon) /*name ve fiyat gelir */
let yfiyatES6=telefon.map(telefon=>telefon.name); /*sadece isim gelir */
let zfiyatES6=telefon.map(telefon=>telefon.fiyat); /*sadece fiyat gelir */



console.log(xfiyatES6);
console.log(yfiyatES6);
console.log(zfiyatES6);

/*ES5 ile filtreleme */
const arr1=[1,2,3,4,5,6,7,8,9,10];

let eveES5=arr1.filter(function(a)
{
    return a%2==0;
});

console.log(eveES5);
/*ES6 ile filtrelem */

let evenES6=arr1.filter(a=>a%2==0);
console.log(evenES6);