

/*primitive ve object aralarındaki farklar */


/*
Stack                                                         Heap 
a=10
b=10
                                                        adres1={name:'deneme1',age:20}
obj1=adres1                              
obj2=adres1

 */


/* a veya b'yi değiştirme diğer verinin değerini değiştirmez ayrı alanlarda tutuluyor */
var a=10;
var b=a;

/*ikisinede 10 değerini yazar */
console.log(a);
console.log(b);

var obj1={
    name:'deneme1',
    age:30
}

/*obj1 de yapılan değişiklik obj2 deki değeride değiştirir çünkü veriyi değil adreslerini tutar veri Heap bölgesinde tutulmakta 
çünkü obj1 ve obj2 aynı adres bilgisini tutmakta*/
var obj2=obj1;
obj1.age=15;


console.log(obj1);
console.log(obj2);

var num=50;
var account={
    name:'deneme2',
    hesapno:'123456'
}

/*a değerinin kopyası gönderiliyor değer değişiyor farklı alandaki kopyasının değeri değişiyor 
b yerine account adresini gönderiyoruz bundan dolayı b değeri değişiyor güncelleniyor */
function update(a,b)
{
    a=100;
    b.hesapno='2222222';
}

update(num,account);

console.log(num);
console.log(account.hesapno);

var urunler=[
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000},
     {name:'urun adı',fiyat:1000}
]

function urunFiltre(urn)
{

}
urunFiltre(urunler);