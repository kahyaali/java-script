

// String

const firstname='deneme1';
const lastname='deneme2'
const age='25';
let val;
const str1='istanbul';
const str2='KÜTAHYA';
const str3='Ankara';
const str4= 'sinema,spor,kitap,yazılım';


// String concatenation kullanımı iki string ifadeyi birbirine bağlamaya yara

val=firstname+' '+lastname;
//bu şekilde de iki string ifadeyi bağlayabilirim
val='deneme3';
val+=' deneme4';
val='Benim Adım '+firstname+' '+lastname+' ve benim yaşım '+age+' istanbul\'da yaşıyorum'; //\' ile üst tırnak ayracı yapıyoruz

// String Concat Kullanımı
val=firstname.concat(' ',lastname); // concat ile string birleştirme bu şekilde ' ' iki string arasında boşluk bırakmak için tırnak işareti kullandık

// String Length string ifadenin karakter sayısını verir
val=val.length; 

// String Uppercase ve Lovercase Kullanımı
val=str1.toUpperCase(); // Büyük harfe çevirdi tüm karakterleri
val=str2.toLowerCase(); // küçük harfe çevirdi tüm karakterleri

val=val.indexOf('t'); // verilen değeri string içinde arar ve bulduğunda index numarasını döner ilk index numarası 0'dır
//val=val.indexOf('ahya'); 

// Substring metodu 
//string içinden istenilen aralığı almaya yarar
val=str1.substring(3,6); // 3. index'ten başla 6.index'e kadar olan değeri getir demek anb olarak çıktısı gelir

// slice metodu
// Bu metot'da substring gibi işlem görür verilen başlangıç indexi ve bitiş indexi arasındaki değeri yazdırır nb olarak çıktısı gelir
val=str1.slice(4,6);
val=str2.slice(3); // 3 index'ten itibaren getirir ahya olarak çıktısı gelir


// string search metodu
val=str1.search('st'); // verilen ifadeyi string içinde arar hangi indexten itibaren bulursa o index numarasını verir

// string replace metodu
// string içindeki bir değeri verilen değer ile değiştirmek için kullanılır
val=str3.replace('A','a'); // Ankaradaki A değerini a ile değiştirdi
val=' '+str3.replace('n','k')+'   '; // n harfini k ile değiştirdi ve başına ve sonuna boşluklar koydu

// Trim metodu
// ifadenin başından ve sonundan boşlukları kesmek için kullanılır
val=str3.trim(); // ifadenin başından ve sonundan boşlukları temizledi

// split metodu
// split metodu string ifadleri ayırmak için kullanılır 
//verilen değere göre ayırır ve dizi olarak geri döndürür ve herbir elemana 0'dan başlayarak index numarası verir
val=str4.split(',');


console.log(val);
console.log(typeof val);