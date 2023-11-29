

// var ve let kulanımları

// Scopes

// global scopes
var name1='deneme1';
var age=25
function LogName()
{
    console.log(name1);
}

if(true)
{
    var age=50;
    console.log(name1);
    console.log('block scope',age);

}


// local scopes
// function'lar kendi scope'larını oluştururlar
// function içinde tanımlanan değişken global değişkene göre daha öncelikli oluyor
// block'lar yeni scope oluşturmazlar-dışarıda var olan değer if içinde farklı değer olarak yazılır ise if içindeki değeri yazar
// ES6 ile gelen let ve const block scope oluşturur block dışında let const değerlerine ulaşılmaz var ile tanımlanan değişkenlere blcok dışında erişilir

function Deneme()
{
    var name1='deneme2';
    console.log('Function scope',name1);
}

if(true)
{
    var model='opel';
    let year=2016;
    const color='white';
    console.log('block scope ',model,year,color);
}

var i=1
for(let i=0;i<10;i++)
{
    console.log('i',i);
}
console.log(i);

console.log(name1);
LogName();
Deneme();
console.log(age);
console.log(window);
console.log('block scope ',model,year,color);