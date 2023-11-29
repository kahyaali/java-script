

/*object.create metodunun kullanımı */

let personProto={
    calculateAge:function()
    {
        return 2023-this.yearofbirth;
    }
}

/*object.create(object) yazarak nesne türetiyoruz bu ifadeyi prtotype kısmında yazar console ekranında
var olan bir objeyi yeni bir objeye atama yapıyoruz yukarıda tanımlanan personProto objesini prototype kısmına alır*/
let deneme1=Object.create(personProto);
deneme1.name='deneme3';
deneme1.yearofbirth=1980;
deneme1.job='student';
let deneme2=Object.create(personProto,
{
      name:{value:'deneme4'},
      yearofbirth:{value:2000},
      job:{value:'teacher'}
});

console.log(deneme1);
console.log(deneme1.calculateAge());
console.log(deneme2);
console.log(deneme2.calculateAge());