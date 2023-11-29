

/*call apply ve bind kullanımı */

var welcome=function()
{
    console.log('hoşgeldiniz '+this.name);
}

var deneme1={name:'istanbul'};
var deneme2={name:'edirne'};

/*deneme1 ve deneme2 welcome fonksiyonunda this yerine geçer ve o nesnenin değerini getirir 
yani deneme1.name deneme2.name şeklinde olur
eğer fonksiyon parametre almıyor ise call ve apply kullanımları aynıdır 
call ve apply farkı parametre kullanımlarındadır */
welcome.call(deneme1);
welcome.call(deneme2);

welcome.apply(deneme1);
welcome.apply(deneme2);

/*bind geriye fonksiyon döner bu yüzden bir değişkene atama yapmamız gerekir */
welcomeDeneme1=welcome.bind(deneme1);
welcomeDeneme2=welcome.bind(deneme2);

welcomeDeneme1();
welcomeDeneme2();


/*parametre alan fonksiyonlarda call ve apply kullanımında tek fark apply ile parametre gönderirken dizi şeklinde gönderiyoruz
aradaki fark bu */
var Deneme=function(a,b)
{
    console.log('welcome '+this.name+' gelen değer '+a+' ve '+b);
}

Deneme.call(deneme1,'c sharp','java script');
Deneme.call(deneme2,'java','jquery');

Deneme.apply(deneme1,['mssql','mysql']);
Deneme.apply(deneme2,['python','matlab']);

denemeAr1=Deneme.bind(deneme1);
denemeAr2=Deneme.bind(deneme2);
denemeAr1('kimya','fizik');
denemeAr2('matematik','tarih');

