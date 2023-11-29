

/*callback Fonksiyonlar */

let val1;
let val2;
let val3;

function MultipleByTwo(a,b,c)
{
    let arr1=[];
    /*fonsiyona gönderilen elemanlara arguments ile erişebiliyorduk */
    for(let i=0;i<3;i++)
    {
        arr1[i]=arguments[i]*2;
    }
    return arr1; /*diziyi geri döndürüyoruz */
}

val1=MultipleByTwo(2,3,4);


function AddOne(a)
{
    return a+1;
}

val2=AddOne(5);

for(let x=0;x<val1.length;x++)
{
    val1[x]=AddOne(val1[x]);
}

/*callback kullanımı callback yazan yere fonksiyon girebiliriz dışarıdan değerleri fonksiyona gönderiyoruz*/

function Deneme(x,y,z,callback)
{

    let arr2=[];
    /*callback null değil ise ve tip olarak function ise */
    if(callback && typeof callback==='function')
    {
        for(let i=0;i<3;i++)
        {
            arr2[i]=callback(arguments[i]*2);
        }
    }
    return arr2; /*diziyi geri döndürüyoruz */
}

val3=Deneme(5,10,15,AddOne); /*ekrana 11 21 31 yazar */


console.log(val1);
console.log(val2);
console.log(val3);