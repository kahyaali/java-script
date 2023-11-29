

/*Inheritance -- Kalıtım*/

/*Prototype */
/*prototype olarak oluşturulan fonksiyonlar Person nesnesine özeldir  */


/*fonksiyon oluşturduk */
let Person=function(name,yearofbirth,job)
{
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job;
}

/*console ekranında _proto_ altında gözükür fonksiyon olarak */
Person.prototype.calculateAge=function()
{
    return 2023-this.yearofbirth;
}

/*ismi geri döndürür */
Person.prototype.getName=function()
{
    return this.name;
}

Person.prototype.FullName='DENEME2';

let deneme1=new Person('deneme1',1980,'student'); /*Person nesnesinden yeni bir nesne türettik */

console.log(deneme1);
console.log(deneme1.calculateAge());
console.log(deneme1.getName());
/*name değeri mevcut olduğu için true döndü name olmasaydı false değer dönecekti 
name adında bir property tanımlı olduğu için true döndü*/
console.log(deneme1.hasOwnProperty('name')); 
/*false değer döner çünkü FullName property olarak tanımlı değil prototype içinde bir değerdir */
console.log(deneme1.hasOwnProperty('FullName'));
console.log(deneme1.FullName);