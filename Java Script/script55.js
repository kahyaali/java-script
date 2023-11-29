

/*kalıtım kullanımı -- sub class */

// ES5 kalıtım kullanımı
function personES5(ad,soyad)
{
   this.ad=ad;
   this.soyad=soyad;
}

personES5.prototype.merhaba=function()
{
     return (`Merhaba ${this.ad} ${this.soyad}`);
}

function customerES5(ad,soyad,telefon,kullaniciadi,sifre)
{
    this.telefon=telefon;
    this.kullaniciadi=kullaniciadi;
    this.sifre=sifre;

    personES5.call(this,ad,soyad);
}

customerES5.prototype=Object.create(personES5.prototype); /*burada aslında kalıtım işlemini yapıyoruz */
//customerES5.prototype.constructor=customer; /*customer constructor'ına tekrar customer'ı göndermem gerek */

var c1=new customerES5();
c1.ad='deneme';
c1.soyad='deneme';
c1.telefon='0300 000 00 00';
c1.kullaniciadi='deneme';
c1.sifre='1234';

console.log(c1.merhaba());

// ES6 kalıtım kullanımı
class personES6{
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }

    merhaba()
    {
        return `merhaba ${this.ad} ${this.soyad}`;
    }
}

/*personES6'dan genişlet customerES6 */
class customerES6 extends personES6
{
    constructor(ad,soyad,telefon,kullaniciadi,sifre){
         //personES6 clasına super() metodu ile ad soyad bilgisini gönderdik ES5 personeES5.call(this,ad,soyad ile gönderiyorduk)
         // super(ad,soyad) metodunu en başa koyuyuruz sonra diğer elemenları tanımlıyoruz yoksa hata verir
             super(ad,soyad);

             this.telefon=telefon;
             this.kullaniciadi=kullaniciadi;
             this.sifre=sifre;   
    }
    static getTotal()
    {
        return 1000;
    }
}

let c2=new customerES6();
c2.ad='deneme2';
c2.soyad='deneme3';
c2.telefon='0300 000 00 00 ';
c2.kullaniciadi='deneme';
c2.sifre='1234';
console.log(c2.merhaba());
console.log(customerES6.getTotal());
