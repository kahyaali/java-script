

/* Async callback kullanımları */

var urunler=[
    {id:1,name:'samsung s8',fiyat:5000},
    {id:2,name:'samsun s7',fiyat:4000},
    {id:3,name:'samsun s6',fiyat:3000}
]

let added=false;
function addUrun(urun,callback)
{
    if(added)
    {
        setTimeout(()=>{
            urunler.push(urun); /*push metodu ile ekleme yapıyoruz */
            callback(null,urun);
         },2000)
    }
    else
    {
         callback('500',urun);
    }
  
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
addUrun({id:6,name:'samsun s3',fiyat:500},
function(err,data)
{
    if(err)
    {
        console.log('hata : '+err);
    }
    else
    {
        console.log(data);
    }
});