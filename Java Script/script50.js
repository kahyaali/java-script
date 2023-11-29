

/*ES6 dizi metotları kullanımı */

const boxes=document.querySelectorAll('.box');

// ES5
 let boxesES5=Array.prototype.slice.call(boxes); /*dizi haline çevirdik */

 boxesES5.forEach(function(x)
{
     x.style.backgroundColor='green';
 });

 // ES6
 let boxesES6=Array.from(boxes); /*array.from(boxes) bu şekilde diziye çevirdi */
 boxesES6.forEach(x=>x.style.backgroundColor='orange');

 console.log(boxesES5);

 // ES5
for(let i=0;i<boxesES5.length;i++)
{
    if(boxesES5[i].className=='box blue')
    {
        continue;  /*burada continue ifadesini gördüğü için işlem yapmaz ve diğer adımlara devem eder */
        break; /*break ifadesini görünce direk döngüden çıkar aşağıdaki kodlarıda çalıştırmaz */
    }
    boxesES5[i].textContent='ben değiştim';
    boxesES5[i].style.backgroundColor='gray';
}


// ES6
for(var box of boxesES6)
{
    if(box.className=='box blue')
    {
        continue;  /*burada continue ifadesini gördüğü için işlem yapmaz ve diğer adımlara devem eder */
        break; /*break ifadesini görünce direk döngüden çıkar aşağıdaki kodlarıda çalıştırmaz */
    }
    box.textContent='ben değiştim';
    box.style.backgroundColor='gray';
}


// ES6 -- from 
/*yazılım dersleri ifadesini dizi haline çevirdi */
let arr1=Array.from('yazılım dersleri');
console.log(arr1);

const urunler=[
    {name:'samsung S8',fiyat:3000},
    {name:'samsung S7',fiyat:2000},
    {name:'samsung S6',fiyat:1000}
]

console.log(Array.from(urunler,x=>x)); /*tüm tanımlar gelir name ve fiyat bilgisi */
console.log(Array.from(urunler,x=>x.name)); /*sadece isim bilgisi gelir */
console.log(Array.from(urunler,x=>x.fiyat)); /*sadece fiyat bilgisi gelir */
console.log(Array.from(urunler,x=>x.name=='samsung S8')); /*samsung S8 bilgileri gelir */
console.log(urunler.find(x=>x.name=='samsung S8'));
/*filter metodu verilen arama şartına göre bulduğu değerleri dizi olarak geri döner */
console.log(urunler.filter(x=>x.name=='samsung S8'));

console.log(urunler.findIndex(x=>x.fiyat==2000)); /*fiyatı 2000 olan ürünün index numarasını geri döner bulamaz ise -1 döner*/



let numbers=['a','b','c'];

let entries=numbers.entries();

for(var i of entries)
{
    console.log(i);
}
/*elemanları anahtar ve değer olarak getirir
çıktısı
[0,    'a']
[1,    'b']
[2,    'c']
*/


/*sadece index numaralarını yani key değerlerini verir */
let keys=numbers.keys();

for(let i of keys)
{
    console.log(i); 
}

/*burada da sadece value değerlerini verir */
let values=numbers.values();
for(let i of values)
{
    console.log(i);
}