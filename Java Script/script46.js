

/*this keyword kullanımı */


//ES5 kullanımı
let list={
    kategori:'telefon',
    isim:['samsung','iphone','oppo'],
    call:function()
    {
          var self=this;
        /*map ile dizi içinde gezip tek tek değerleri yazdırıyor this list objesini ifade eder */
        this.isim.map(function(x)
        {
            /*buradaki this.kategori tanımına console ekranında undefined der tanımaz başka bir fonksiyon içinde kullandığımız için
            çünkü yeni bir fonksiyon olduğunad ayrı bir contex oluşturdu this ifadesini kullanmak için fonksiyon dışında yeni bir değişken
            tanımlayıp this ifadesini buna atarız ve this yerine bu ifadeyi kullanırız */
              console.log(`${self.kategori} ${x}`); 
        })
    }
}

list.call();

//ES6 kullanımı

let list1={
    kategori:'telefon',
    isim:['samsung','iphone','oppo'],
    call:function()
    {
        this.isim.map((x)=>{
            console.log(`${this.kategori} ${x}`); 
        })
    }
}

list1.call();

// ES5 Kullanım
function Game()
{
    this.live=0;
    this.addLive=function()
    {
        var self=this;
        /*bir saniyede bir çalışacak ve live değerini 1 arttıracak */
        this.OneUp=setInterval(function()
        {
            console.log(++self.live);  /*burada this tanımadığı için this ifadesini self değişkenine atayıp yazdık */
        },1000)
    }
}

let player=new Game();
player.addLive();

// ES6 Kullanım
function Games()
{
    this.live=0;
    this.addLive=function()
    {
        /*bir saniyede bir çalışacak ve live değerini 1 arttıracak */
        this.OneUp=setInterval(()=>{
            console.log(++this.live); /*this ifadesini başka bir değişkene atamaya gerek kalmıyor direk this kullanabiliriz */
        },1000)
    }
}

let palyers=new Games();
palyers.addLive();