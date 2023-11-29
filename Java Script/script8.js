

// Java Script Diziler
// Array
// dizi oluşturmak için köşeli parantez içinde yazıyoruz diziler object ifadelerdir
let names=['deneme1','deneme2','deneme3','deneme4'];
let mix=['deneme2','deneme2',1984,null,undefined,['sinema','kitap','spor']]; // Dizi içerisinde dizi tutuyoruz
let renk=['sarı','kırmızı','siyah','beyaz'];
let years=[1984,1985,2000,2020];

// get array item dizideki elemanı alma
console.log(names[0]);
console.log(names[3]);

// set array item - diziye yeni bir eleman ekleme
names[0]='deneme5';
names[5]='deneme6'; // 4. index elemanına empty yazar çünkü 4. index'e eleman eklemedik
names[names.length]='deneme10'; 
// index kaçıncı sırada kaldığını bilmiyorsak dizinin uzunluğunı alır o şekilde elemanı eklersek sıradaki index ne ise o index'e ekler

// add item ile diziye eleman ekleme- push ile diziye ekleme yaparız sıradaki index'e ekler yeni değeri
renk.push('yeşil'); // push ile eklenen değer dizinin sonuna eklenir
renk.unshift('siyah'); // unsihft ile eklenen değer dizinin başına eklenir

// remove item - diziden eleman çıkarma pop ile dizideki bir elemanı çıkarırız
renk.pop(); // dizideki son elemanı diziden çıkarır en sondaki elemanı çıkarır
renk.shift(); // dizinin başındaki elemanı çıkarır en baştaki elemandan başlar çıkarmaya

// index of - dizi içerisinde arama yapar ve bulduğu index numarasını verir
let index=renk.indexOf('kırmızı');  // verilen değeri bulduğu index numarasını verir

// reverse -  dizideki elemanları tersine çevirir
renk.reverse();

// sort - dizideki elemanalrı sıralamaya yarar alfabetik yada büyükten küçüğe doğru sıralama yapar
names.sort();

// concat -  dizileri birleştirmek için kullanılır
let val=renk.concat(names);

// splice - verilen değerden başlar ikinci verilen değere kadar elemanları siler
// 2. index numarasından itibaren sıfır dediğimiz için hiç bir değeri silmedi 2.index'ten sonra turuncu elemanını ekledi araya
renk.splice(2,0,'turuncu'); 
// 2.indexten sonra gelen ilk elemanı sildi ve yerine yeşil değerini ekledi
renk.splice(2,1,'yeşil');
// elemean silmek içinde kullanabiliriz illa eleman eklemek için kullanmaya biliriz
renk.splice(0,1);

// filter - dizi içerisinde filtreleme yapmak için kullanılır
/*bir tane fonksiyon oluşturuyoruz sonra değer atıyoruz aldığı değere göre yaşı hesaplayıp 
şarta bağlı olarak true yada false değer dönüyor*/

 function over18 (years){
      let age=2023-years;
      return age>=18;
 }

 console.log(over18(1984));
 let val2=years.filter(over18); // geriye dizi şeklinde döner kaç tane 18'e eşit yada büyük değer var ise
 console.log(val2);
// find - dizi içerisinde arama yapmak için kullanılır
let val1=years.find(over18);  // ilk 18 yaşından büyük değeri bulur ve getirir geriye tek değer döner
console.log(val1);





console.log(names.length); // dizinin eleman sayısını verir
console.log(names);
console.log(mix);
console.log(renk);
console.log(index);
console.log(val);
console.log(typeof names);