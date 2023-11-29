

/*set kullanımı-- set(collection unique value) */

/*map kullanırken set metodunu kullanıyorduk bunda add metodunu kullanıyoruz */
let val;

var mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); /*bu 2 değerini eklemez eklenmiş olan 2 değeri var çünkü benzersiz değerleri ekler aynı değer var ise ikincisini eklemez */
mySet.add('bir');
mySet.add({a:1,b:2,c:3}); /*object ataması yapabiliriz */
var obj={
    a:1,
    b:2,
    c:3
}
mySet.add(obj);

val=mySet;
val=mySet.has(1); /*has metodu ile verilen değer lsite içinde var yok kontrolu yapar var ise true yok ise false döner */
val=mySet.has(obj);
val=mySet.size; /*listenin eleman sayısını verir */
//mySet.delete(1); /*verilen değeri listeden siler çıkarır */
//mySet.clear(); /*tüm listeyi temizler */


console.log(val);

for(let item of mySet)
{
    console.log(item);
}


/*set'lerde key ve value aynı değerleri temsil ediyor */
for(let item of mySet.keys())
{
    console.log(item);
}

for(let item of mySet.values())
{
    console.log(item);
}

console.log(Array.from(mySet)); /*mySet array.from ile diziye çeviriyoruz ve dizi metotlarını kullanabiliriz */

let mySet2=new Set([1,2,3,4,5]);

console.log(mySet2);

// Intersect mySet ve mySet2 kesişimlerini almak istersek
/*myset'ten gelen x değerlerini mySey2 içine gönderip var mı yok mu kontrolünü sağlıyoruz */
// 1. Yöntem
var intersect=new Set(Array.from(mySet).filter(x=>mySet2.has(x)));

// 2. Yöntem
var intersect1=new Set([...mySet].filter(x=>mySet2.has(x)));
console.log(intersect);
console.log(intersect1);


// Diffarence mySet ve mySet2 arasındaki farkları almak istersek
var difference=new Set([...mySet].filter(x=>!mySet2.has(x))); /*! değil diyerek olmayanları true çevirip farklı olanları aldık */
console.log(difference);