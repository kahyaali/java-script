

/*class kullanımı ES6 ile geliyor*/

// ES5

/*bunun constructor fonksiyon */
var personES5=function(name,job,yearofbirth)
{
     this.name=name;
     this.job=job;
     this.yearofbirth=yearofbirth;
}


/*prototype alanında oluşturulan fonksiyonu tüm instance'lar kullanabilir */
personES5.prototype.calculateAge=function()
{
    return 2023-this.yearofbirth;
}

var deneme1=new personES5();
deneme1.name='deneme';
deneme1.job='teacher';
deneme1.yearofbirth=1980;

console.log(deneme1.calculateAge());

// ES6


/*bunun constructor class */
class personES6
{
    constructor(name,job,yearofbirth){
        this.name=name;
        this.job=job;
        this.yearofbirth=yearofbirth;
    }

     /*class içinde hem constructor hemde fonksiyon tanımlayabiliyoruz */
    calculateAge()
    {
        return 2023-this.yearofbirth;
    }
}

let deneme2=new personES6();
deneme2.name='deneme2';
deneme2.job='doktor';
deneme2.yearofbirth=2000,
console.log(deneme2.calculateAge());

console.log(deneme1);
console.log(deneme2);
