

/*built-in constructors */

// string

var str1='deneme1';
var str2=new String('deneme1');

console.log(str1);
console.log(str2);

console.log(typeof str1);  /*string olarak gelir */
console.log(typeof str2);  /*object olarak gelir */


/*hem eşitlik hemde tip kontrolü yapıyoruz ikiside string ifade olduğu için hem eşit hemde tipleri aynı */
if(str1==='deneme1')
{
    console.log('tipler ve değer aynı');
}
else
{
    console.log('tipler veya değerler farklı olabilir');
}


/*burda hayır yazar textler eşit fakat tipler aynı değil biri string biri object tipler aynı olmadığı için ekrana hayır yazar */
if(str2==='deneme1')
{
    console.log('tipler ve değer aynı');
}
else
{
    console.log('tipler veya değerler farklı olabilir');
}


/*=== değilde == ile kontrol edersek tipe bakmaz isek aynı değer bilgisini verir tip karşılaştırması yapmaz */
if(str2=='deneme1')
{
    console.log('değer aynı');
}
else
{
    console.log('değerler farklı olabilir');
}

// Number
var num1=10;
var num2=new Number(10);

// Boolean
var b1=true;
var b2=new Boolean(true);

//object
var obj1={
    name:'deneme'
}

var obj2=new Object({
  name:'deneme'
});

// Array
var arr1=[1,2,3,4,5];
var arr2=new Array(1,2,3,4,5);


String.prototype.metod1=function(n)
{
    return new Array(n+1).join(this);
}

/*array içinde remove metodu yok kendimiz oluşturduk ileride array içine remove metodu eklerler ise bizim metodu ezmememesi
için bu şekilde bir karşılaştıma yapıyoruz */
Array.prototype.remove=Array.prototype.remove|| function(dlt)
{
    var index=this.indexOf(dlt); /*indexof değeri bulursa bulduğu index numarasını döner bulamaz ise -1 döner */
    if(index>-1)
    {
       this.splice(index,1); /*silinecek index numarasını veriyoruz ve indexten itibaren kaç tane silinecek ise o değeride yazıyoruz */
    }
    return this; /*eğer silme yok ise tekrar diziyi dönsün */
}
console.log(arr1.remove(5));

console.log('deneme'.metod1(2));