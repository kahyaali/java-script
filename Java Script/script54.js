

/*static metot kullanımı*/
/*class kullanımı ES6 ile geliyor*/


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

    /*static metodu oluşturulan obje üzerinden ulaşıp kullanamıyoruz */
    static Merhaba()
    {
        console.log('merhaba');
    }
}

var deneme1=new personES6();
deneme1.name='deneme1';
deneme1.job='teacher';
deneme1.yearofbirth=1980;
console.log(deneme1.calculateAge());
//deneme1.Merhaba(); /*bu şekilde çağırırsak hata verir metot olarak görmedi oluşturulan obje üzerinden erişilemedi */
personES6.Merhaba(); /*bu şekilde çağırıp kullanabiliyoruz */

class point{
    constructor(x,y){
      this.x=x;
      this.y=y;
    }

    static distance(a,b){
         const dx=a.x-b.x;   /*a d1 b d2'yi temsil eder bu değişkenler üzerinden x ve y değerlerine ulaşabiliyoruz */
         const dy=a.y-b.y;
         return Math.hypot(dx,dy);
    }
}

const d1=new point(10,10);
const d2=new point(20,20);

// static metodu çağırıyoruz
console.log(point.distance(d1,d2));


