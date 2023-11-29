

/*async promise uygulama */


// uygulama 1
var p=new Promise(function(resolve,reject){

   if(true)
   {
       resolve('success');
   }
    else
    {
        reject('failure');
    }

});

p.then(function(data){
   console.log(data);
}).catch(function(error){
   console.log(error);
});


// uygulama 2

var t=new Promise(function(resolve,reject){
   setTimeout(()=>{
    resolve(5);
   },2000);

});


/*return ile gönderdiğim sonucları then ile tekrar yakalayabiliriz */
t.then(function(number){
  console.log(number);
  return number*number;
}).then(function(number){
   console.log(number);
   return number*number;
}).then(function(number){
    console.log(number);
});

// uygulama 3

const isControl=true;

const getTelefon=new Promise((resolve,reject)=>{
  if(isControl)
  {
    const telefon={
        name:'iphone 8',
        fiyat:10000,
        renk:'beyaz'
    }
    resolve(telefon);
  }
  else
  {
     const error=new Error('sonuç doğru değil');
     //error.message='sonuç doğru değil';
     reject(error);
  }
});

const goster=function(telefon)
{
  const mesaj='tebrikler sonuç doğru '+telefon.name;
  return Promise.resolve(mesaj);
  
}

/*getTelefondan sonucu then ile alıyorum ilk durumda goster fonksiyonunu çağırıyorum ve telefon bilgisini ona aktarıyorum
ordan dönen mesajı then ile yakalayıp ekranda gösteriyorum */
const sonucKontrol=function()
{
   getTelefon.then(goster)
   .then(mesaj=>console.log(mesaj))
   .catch(error=>{
    console.log(error);
   });
}


sonucKontrol();

