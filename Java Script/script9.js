

// if else kullanımı

const firstname='istanbul';
const age=19;
const IsStudent=true;
const school='university';

// hem değişken değerini kontrol ediyor hemde değer tipini uyumlu olup olmadığını kontrol ediyor
if(firstname==='istanbul')
{
    console.log('merhaba istanbul');
}

if(age===19)
{
    console.log('yaşınız ',age);
}

if(IsStudent)
{
    console.log('merhaba öğrenci');
}
else{
    console.log('öğrenci değilsiniz');
}

if(age>=18)
{
    console.log('ehliyet alabilirsiniz');
}
else{
    console.log('ehliyet alamazsınız');
}

if(age>=18)
{
    if(school=='university')
    {
        console.log('ehliyet alabilirsiniz');
    }
    else
    {
        console.log('okul durumunuz yetersiz');
    }
}

if(age>0 && age<12)
{
    console.log(`${firstname} is a child`);
}
else if(age >=13 && age<=19)
{
    console.log(`${firstname} is a öğrenci`);
}

if(typeof age !=='undefined')
{
  console.log('age '+age);
}