

/*Prototypal Inheritance */

let Person=function(name,yearofbirth,job)
{
   this.name=name;
   this.yearofbirth=yearofbirth;
   this.job=job;
}

Person.prototype.calculateAge=function()
{
    return 2023-this.yearofbirth;
}

let teacher=function(name,yearofbirth,job,subject)
{
    /*Person.call diyerek this anahtar sözcüğü ile tanımlamaları Person fonksiyonuna yaptırıyoruz
    teacher'da da aynı değerler fakat this.name diye işlemiyoruz call ile Person fonksiyonunda bu parametleri kullandırıyoruz */
  Person.call(this,name,yearofbirth,job); 
  this.subject=subject;
}



/*Inherit the person prototype metod */

/*teracher.prototype'ına persone.prototype değerini atıyoruz yoksa console.log(deneme1.calculateAge()); dediğimizde hata verir 
çünkü teacher.prototype'ında atanmış veri yoktur
teacher.prototype'ını Person.prototype'ından inherit ettik*/
teacher.prototype=Object.create(Person.prototype);

/*set teacher constructor */
/*teacher.prototyep.constructor'ına teacher nesnesini atamamız gerekiyor */
teacher.prototype.constructor=teacher; 

teacher.prototype.tanisma=function()
{
    return 'merhaba benim adım ' + this.name;
}

let deneme1=new teacher('deneme',2000,'teacher','kimya');

console.log(deneme1);
console.log(deneme1.calculateAge()); /*bu şekilde yazdığımızda hata verecektir çünkü prototype aktarılan veri yok bundan dolayı hata veriyor */
console.log(deneme1.tanisma());