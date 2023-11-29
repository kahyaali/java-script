

/*async await kullanımı */

function fn()
{
    return Promise.resolve('merhaba');
}

fn().then(data=>
    {
        console.log(data);
    })


    /* fonksiyonun başına async koymam onun tekrar promise göndermesini sağlıyor fonksiyon içinde return promise.resolve() 
    dememe gerek kalmıyor. async ile işaretli fonksiyon geriye promise dönüyor */
    async function fn1(){
        return 'merhaba';
    }

    fn1().then(res=>{
        console.log(res);
    })

    console.log(fn1()); /*promise olarak döner promiseresult kısmında merhaba yazar */
/*---------------------------promise ile kullanım------------------------------------------------------ */

var err=false;
    function getKategori()
    {

        return new Promise((resolve,reject)=>{
            setTimeout(()=>
            {
                if(!err)
                {
                    resolve('telefon');
                }
                else
                {
                    reject('bir hata oluştu');
                }
              
            },1000)
        });   
    }

    function getUrun(kategori)
    {
        return new Promise(resolve=>{
             setTimeout(()=>{
                 resolve(`5 urun ${kategori}`);
             },1000);
        });
    }

    getKategori()
    .then(getUrun)
    .then(res=>console.log(res))
    .catch(error=>console.log(error));

    /*---------------------------async ile kullanım----------------------------------- */
  

    var err1=false;
    function getCategory()
    {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>
            {
                if(!err1)
                {
                    resolve('telefon bilgisi');
                }
                else
                {
                    reject('bir hata oluştu');
                }
                 
            },1000)
        });   
    }


    function getProducts(kategori)
    {
        return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                 resolve(`5 urun ${kategori}`);
             },1000);
        });
    }

    /*async fonksiyon ile await ile bir fonksiyondan bilgiyi alıyorum diğer fonksiyone gönderiyorum ordan gelen bilgiyi ekrana yazdırıyorum 
    then ile yapmak yerine await ile yapıyoruz await ifadesini kullanabilmek için async fonksiyonu içinde olmamız gerek*/
    async function getProduct()
    {
        try {
            let _category=await getCategory(); /* bu işlem çalıştırılmadan aşağıdaki işlem çalıştırılmaz */
            let _result=await getProducts(_category);
            console.log(_result);
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    getProduct();