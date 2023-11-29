
// //Ders 1. Ekrana ve Console bilgi yazdırma
// alert("merhaba");
// console.log("merhaba");
// console.error("hata oluştu");
// console.warn("bir uyarı luştur");
// console.clear();

// // tek satırlık yorum satırı
// /*çok satırlı yorum*/

// //Ders 2. Değişken Tanımlama ve Değişken Tanımlama Kuralları
// // 1. Değişken sayısal ifade ile başlayamaz
// // 2. Komut isimleri ile tanımlama yapılamaz
// // var , let , const  var ile tanımlanan değişkenleri let ile de tanımlayabiliriz const ile yapılan tanımlamada değişkenin sabit olduğunu belirtiyoruz

// var age1;
// age1=20;
// console.log(age1);

// let age2;
// age2=30;
// console.log(age2);

// let city;
// city='kütahya';
// console.log(city);

// const email='deneme@deneme.com';
// console.log(email);

//Ders 3. Değişken Tipleri

//1. Primitive Types
//String Tanımlama

// let ad='Deneme';
// console.log(typeof ad); /*bize değişkenin tipini verir*/
// //Number Tanımlama
// let age=20;
// console.log(typeof age);

// //Bolean Tanımlama

// let durum=true;
// console.log(typeof durum);

// //Null Tanımlama

// let IsDurum=null;
// console.log(typeof IsDurum);

// //Undefined Tanımlama
// let car;
// console.log(typeof car);

// //2. Reference Types- Objects

// //Array Tanımlama

// let names=['deneme1,deneme2,deneme3,deneme4,deneme5'];
// console.log(typeof names);

// //Object Tanımlama

// let adress={
//     city:'Kütahya',
//     country:'Türkiye'
// }
// console.log(typeof adress);

// //Function Tanımlama

// var calculate=function(){
//     return 0;
// };
// console.log(typeof calculate);

// Değişkenlerde Tür Dönüşümü

let num1=Number('5'); // stringden sayısal değere dönüşüm yaptık
let num2=Number('10');
console.log(num1+num2);
console.log(typeof num1);

let val;
val=String(10); // sayısal değerden string ifadeye dönüşüm sağladık
console.log(val);
console.log(typeof val);

let deger;
deger=String(true); // Bolean değeri string değere çevirdik
console.log(deger);
console.log(typeof deger);

let tarih1=String(new Date().getMinutes()); // tarih değerini string formata çevirdik
console.log(tarih1);
console.log(typeof tarih1);

let tarih2=String(new Date().getHours()); // tarih değerini string formata çevirdik
console.log(tarih2);
console.log(typeof tarih2);

let tarih3=String(new Date().getDay()); // tarih değerini string formata çevirdik
console.log(tarih3);
console.log(typeof tarih3);

// Array to string
let dizi=String([1,2,3,4,5]);

// Tostring
let sayi=(10).toString(); // sayısal değeri string ifadeye çeviridik

let num3=Number('10');
console.log(num3);
console.log(typeof num3);
console.log(num3.toFixed(3)); //virgülden sonra 3 sıfır koy demek

//ParsInt ve ParsFloat

let num4=parseInt('50'); //string ifadeyi sayısal ifadeye çevirdi
let num5=parseInt('10.5'); // 10 olarak yazar tam sayı olarak alır
let num6=parseFloat('10.5'); //string olan ifadeyi float değere çevirir