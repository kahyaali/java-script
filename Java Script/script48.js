

/*rest parameters kullanımı */

//ES5 

/*fonksiyon parametre almamasına rağmen gönderdiğim elemanları console ekranına yazdırdı */
function SumES5()
{
    /*fonksiyonun elemanlarına arguments ile erişiyoruz dizi olarak */
    console.log(arguments);
}

SumES5(10,20,30);

function SummES5()
{
    /*fonksiyonun argumentlerini fonksiyone çevirdik ve arr değişkenine atadık */
    let arr=Array.prototype.slice.call(arguments);
    console.log(arr);

    let result=0;
    arr.forEach(function(x) {
        result+=x;
    });
    return result;
}

console.log(SummES5(10,20,30));

//ES6 ile kullanım

function sumES6(...arr) /*spread yöntemini kullandık dizi gibi aktardık elemanları */
{
    let result=0;
    arr.forEach(x=>{
        result+=x;
    });
    return result;
}

console.log(sumES6(1,2,3,4));

function isDriver(...years)
{
    years.forEach(x=>{
         console.log(2023-x>=18);
    });
}

console.log(isDriver(1980,2015,1990,2010));