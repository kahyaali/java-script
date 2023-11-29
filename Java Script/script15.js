

// function declarations
// 1. yöntem
function sum(a,b){
    var c=a+b;
    return c;
}
 console.log(sum(10,20));

 // 2. yöntem
 // sum1 değerine function değerlerini yükledik fonction tanımlaması değişken içine oluyor
 const sum1=function(x,y){
     var z=x+y;
     return z;
 }
 console.log(sum1(10,30));

 const sum2=function(k,l){
   // girilen argumanlardan biri undefined ise if şartı ile default değer giriyoruz
    if(typeof k==='undefined'){k=0}
    if (typeof l==='undefined'){l=0}
    m=k+l;
    return m;
 }
 console.log(sum2(20));

 // burada default değer veriyoruz argumanlara dışarıdan gelen değer olmaz ise
 const sum3=function(i=0,j=0)
 {
    var t=i+j;
    return t;
 }
console.log(sum3(50));

// dizi olarak argumanları alabiliriz
function args(){
    console.log(arguments);
}
args(10,20,30);



// arguments ile functiona gönderilen elemanlara ulaşıp döngü yardımı ile erişebiliyoruz
function SumAll(){
    var total=0;
    for (let i=0;i<arguments.length;i++ )
    {
        total+=arguments[i];
    }
    return total;
}

console.log(SumAll(10,20,30,40,50));

// function expressions