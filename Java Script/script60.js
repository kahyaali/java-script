

/*async promises kullanımı */

var urunler=[
    {id:1,name:'samsung s8',fiyat:5000},
    {id:2,name:'samsun s7',fiyat:4000},
    {id:3,name:'samsun s6',fiyat:3000}
]


function addUrun(urun,callback)
{
   /*resolve çözümleme reject ise hata olduğunda kullanılan bir parametredir  */
    return new Promise(function(resolve,reject){
       setTimeout(()=>{
         urunler.push(urun);
         let added=true;
         if(added)
         {
            resolve(); /*getUrun() fonksiyonu çağırıyor then alanından alıyor */
         }
         else
         {
            reject('hata: 500'); /*buda hata olduğunda catch'teki fonksiyonu çağırıyor */
         }
       });
    });
}

function getUrun()
{
     setTimeout(()=>{
           urunler.forEach(p => {
             console.log(p.name);
           });
     },1000);
}


/*1 saniye sonra elemanları getirdi 2 saniye sonra yeni elemanı ekledi ve yeni eklenen elamanı göremedik  */
//addUrun({id:4,name:'samsun s5',fiyat:2000},getUrun);

/*then ekledik ekleme yaptıktan sonra then kısmı çalışacak resolve kısmı çalışacak catch ilede reject yani hatayı yakalıyoruz */
addUrun({id:4,name:'samsun s5',fiyat:2000}).then(getUrun).catch(function(err){
   console.log(err);
});
