
// Müşteri adı
// Müşteri soyadı
// Müşteri TC NO
// Müşteri sipariş toplamı
// Müşteri cinsiyet
// Müşteri adres bilgisi
// Müşteri hobiler


var order1=Number('100');
var order2=Number('250');
var order3=Number('150.5');
var order4=Number('220.4');
var customername='deneme1';
var customerlstname='deneme2';
var customerfullname='deneme1 deneme2';
var musteriid='12345678901';
var total=205.6;
var gender=true; // erken için true bayan için false
//object olarak tutuyoruz adres bilgilerini
var adress={
    city:'istanbul',
    district:'Ümraniye',
    body:'deneme mah. deneme.cad'
}
// hobileri dizi olarak tutuyoruz
var hobbies=['sinema','kitap','spor'];

var totalorder1=order1+order2;
console.log(totalorder1);

var totalorder2=order3+order4;
console.log(totalorder2);

// yaş hesapladık
var yearofbirth=1984;
console.log(new Date().getFullYear()-yearofbirth);

// verilen string ifadenin karakter sayısını bulduk length komutu ile
var deneme='modern java script kursu';
console.log(deneme.length);