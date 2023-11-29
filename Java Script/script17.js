

// window object


let val;
var a=10;
function abc(){
return 0;
};

/*val değişkeni içerisinde a=10 değeride geldi oysaki val değişkenine a=10 ataması yapmamıştık val=window dediğimiz için geldi
tanımlanan abc fonksiyonuda geldi  */
val=window;

// Alert
alert('merhaba');

// prompt
// prompt ekrandan kullanıcıdan değer almamızı sağlar
var x=prompt('bir sayı giriniz');
console.log(x);

// confirm
// confirm ile ekrana onay kutulu uyarı penceresi çıkartılır onaylayınca true değerini verir
var confirmm=confirm('eminmisiniz?');
if(confirmm)
{
    console.log('evet');
}
else
{
    console.log('hayır')
}


/////////////////////////////////////////////////////////////////////////////////////////

// Scroll
// web sayfasındaki web ekranında scrollX ve scrollY position değerini verir
scrlX=window.scrollX;
scrlY=window.scrollY;

// location
/*bana bağlantı adresimin bilgisini verir we sayfası location bilgisini verir hostname bilgisini port bilgisini protocol bilgisini
host bigisini gibi bilgileri verir*/

var loc1=window.location;
var loc2=window.location.href; // tarayıcıdaki adresi verir
var loc3=window.location.hostname; // tarayıcıdaki adresi almış oluruz 127.0.0.1 gibi
var loc4=window.location.host;  // host adresini verir 127.0.0.1:5500 gibi
//windowindow.location.href='https://mynet.com'; // verilen tarayıcı adresine yönlendirme yapılır yazılan adrese gider
//window.location.reload(); // sürekli olarak sayfanın refresh olmasını sağlar


console.log(confirmm);
console.log(val);
console.log(scrlX);
console.log(scrlY);
console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);


// navigator


