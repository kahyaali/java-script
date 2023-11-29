

/*Inheritance */

/* 
! Person Constructor 
*/
function Person(name)
{
    this.name=name;
}

Person.prototype.Introduce=function()
{
    console.log('mehaba benim adım '+this.name);
}


/*
! Teacher constructor
*/
function Teacher(name,bolum)
{
    Person.call(this,name); /*isim değerini person fonksiyonunda alacak */
    this.bolum=bolum;
}

/*Person Prototype'ını Teacher Prototype'ına aktarıyoruz teacher üzerinden Introduce metoduna erişebileceğiz yoksa erişemezdik */
Teacher.prototype=Object.create(Person.prototype); 

/*person.prototype değeri teacher.prototype değerine aktarıldı Persone değerlerini taşıyor tekrar teacher constructor'ına teacher
değerlerini atamamız gerek teacher elemanlarına erişebilmek için 
*/
Teacher.prototype.constructor=Teacher;

Teacher.prototype.teach=function()
{
    console.log('Benim bölümüm '+this.bolum);
}

/*
! Student constructor
 */
function Student(name,number)
{
    Person.call(this,name);
    this.number=number;
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.study=function()
{
    console.log('merhaba Benim adım '+this.name);
}

/*
! headmaster constructor
*/
function Headmaster(name,bolum)
{
   Teacher.call(this,name,bolum);
}

Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.constructor=Headmaster;
Headmaster.prototype.ShareTask=function()
{
   console.log('çalışmalar devam ediyor');
}


let p1=new Person('deneme1');
p1.Introduce();

let  t1=new Teacher('deneme2','matematik');
t1.Introduce(); /*prototype'ları eşitlediğimiz için person prototype'ına erişebildik */
t1.teach();

let s1=new Student('deneme3',200);
s1.Introduce();
s1.study();

let h1=new Headmaster('deneme4','fizik');
h1.teach();
h1.ShareTask();
h1.Introduce();