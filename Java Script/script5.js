

// Numbers

val=number('10'),
val=parseInt('10');
val=parseFloat('10.5');
val=parseInt('a10'); // sayısal değere çevrilemez ise NaN diye geri bildirim verir sayıya çevrilemez bilgisi olarak

val=isNaN('10');  // verilen değerin sayı olup olmadığının bilgisini verir sayı ise false değeri döner, sayı ise false döner
val=isNaN('a10'), // veirlen değerin sayı olup olmadığını kontrol eder eğer sayı değil ise true döner, sayı değil ise true döner

num=10.1245678;
val=num.toPrecision(2); // num değişkenin 2 ilk iki değerini getirir sonuc 10 olarak gelir
val=num.toPrecision(5); // num değişkenin ilk 5 rakamını getirir sonuc 10.125 olarak gelir 45678 değerini 5 olarak yuvarlar
val=num.toPrecision(6); // num değişkenin ilk 5 rakamını getirir sonuc 10.1246 olarak gelir 5678 değerini 6 olarak yuvarlar
val=num.toFixed(2);  // 2 demek virgülden sonraki 2 basamığı temsil ediyor
val=num.toFixed(5);  // 5 demek virgülden sonraki 5 basamığı temsil ediyor

// toFixed verilen değer ile virgülden sonraki basamağı ifade eder
// toPrecision ise verilen değer kadar sayısı al demek virgül hariç geri kalan rakamları yuvarlayarak tek rakam olarak yazar

val=Math.PI; // pi sayısını verir
val=Math.round(2.4);  // en yakın sayıya yuvarlar 2 olarak verir değeri
val=Math.round(2.7);  // en yakın sayıya yuvarlar 3 olarak verir değeri
val=Math.ceil(2.4); // yukarı yuvarlar 3 olarak verir değeri
val=Math.ceil(2.7); // yukarı yuvarlar 3 olarak verir değeri
val=Math.floor(2.4); // aşağı değere yuvarlar 2 olarak verir değeri
val=Math.floor(2.7); // aşağı değer yuvarlar 2 olarak verir değeri
val=Math.sqrt(25); // verilen değerin karekökünü verir
val=Math.pow(2,4); // verilen değerlerin üssünü alır 2 üzeri 4 yani 16 sonucunu verir
val=Math.abs(-10); // verilen değerin mutlak değerini verir
val=Math.min(1,2,4,6,5,3); // [] dizi beklediğini belirtir istediğimiz kadar değer girebiliriz dizi olarak ve bu sayılar arasında en küçük olanı verir
val=Math.max(1,2,4,6,3,9);  // [] dizi bekler ve bu değerler arasında en büyük değeri verir
val=Math.random(); // 0 ile bir arasında rastgele bir sayı üretir
val=Math.floor(Math.random()*10); // üretilen sayıyı 10 ile çarpıp sabit değere çevirdim
val=Math.floor(Math.random()*100); // üretilen sayıyı 100 ile çarpıp sabit değere çevirdim

/* Math.round= en yakın değere yuvarlar
   Math.ceil= en üst değere yuvarlar
   Math.floor= en alt değere yuvarla
   Math.sqrt= verilen değerin karekökünü alır
   Math.pow= verilen değerlerin üssünü alır
   Math.abs= verilen değerin mutlak değerini verir
   Math.min = [] dizi beklediğini belirtir istediğimiz kadar değer girebiliriz dizi olarak ve bu sayıalar arasında en küçük olan değeri verir
   Math.max= [] dizi bekler ve bu dizi içerisindeki en büyük değeri verir
   Math.random= 0 ile 1 arasında rastgele bir sayı üretir
*/


console.log(val);
console.log(typeof val);