

/*modern pattern kullanımı */

/*IIFE (Immediately Invoked Function Expressions) */

// bu şekilde fonskiyonları tanımlarsam bir birlerini ezemiyorlar ekrana deneme1 ve deneme2 yazar
/*farklı modüllerden gelen benzer değerler var ise birbirini ezmemesi içi model pattern yapısını kullanabiliriz */
(function(){
   var name='deneme1';
   console.log(name);
})();

(function(){
    var name='deneme2';
    console.log(name);
 })();



 /*fonksiyon içindeki elemenlar privatter fakat return içindeki elemanlar public elemandır dışarıdan erişilebilir */
(function(){
      
    // private elemanlar

    return {
      // public elemanlar
    }
})();

(function(){
   let number=0;
    let increment=function()
    {
        return ++number;
    }
    console.log(increment());
})();


// Dışarıdan erişim sağlayamadım sadece fonksiyonun kendi içinde çalışır fonksiyonu çağırdığımda kendi içinde console.log'da çağırabilirim
console.log(number)
console.log(increment);

var modul=(function(){
    let number1=0;
    let increment1=function()
    {
        return ++number1;
    }
    return increment1;
})();

/*fonksiyonu model değişkenine atadık yine içerisindeki foksiyonlara erişemedik return dışında kalanlara
erişebilmek için fonksiyonları return içine atmak gerek */
console.log(modul.increment1()); 