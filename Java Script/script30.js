
/* Object ve Function */

/*Function Constructors */

/*
Person (Constructor)                                    let  Deneme1 (Instances)                           let Deneme2 (Instances)

name                                                    Deneme1                                            Deneme2              
yearOfBirth                                             1999                                               2000
Job                                                     student                                            Farmer
calculateAge()                                          Deneme1.calculateAge()                             Deneme2.calculateAge()

 */


/*Object Literals */
/*
let deneme1={
    name:'deneme1',
    yearOfBirth:2010,
    job:'student'
}
*/


/* 1. Yöntem */
function Person(name,yearofbirth,job)
{
  this.name=name;
  this.yearofbirth=yearofbirth;
  this.job=job;
  this.calculateAge=function calculateAge()
  {
       return 2023-this.yearofbirth;
  }
}

/*2. Yöntem */

let Person =function(name,yearofbirth,job)
{
     this.name=name;
     this.yearofbirth=yearofbirth;
     this.job=job;
     this.calculateAge=function calculateAge()
      {
       return 2023-this.yearofbirth;
      }
}

/*üretilecek olan deneme1 nesnesi Person object'inden çıkarılacak */
let deneme1=new Person('deneme1',2000,'student');
let deneme2=new Person('deneme2',1980,'teacher');

console.log(deneme1.name);
console.log(deneme1.yearofbirth);
console.log(deneme1.job);
console.log(deneme1.calculateAge());
console.log('*********************************');
console.log(deneme2.name);
console.log(deneme2.yearofbirth);
console.log(deneme2.job);
console.log(deneme2.calculateAge());

