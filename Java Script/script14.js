

// Function kullanımı

// verilen değere göre yaşı veriyor
function YasHesapla(dogumyili)
{
    return new Date().getFullYear()-dogumyili;
}

let val=YasHesapla(1984);
console.log(val);


// return demediğimiz için geriye değer döndürmez
function EmeklilikHEsapla(dogum,isim)
{
    let yas=YasHesapla(dogum); // function içinde funciton çağırdık
    let emeklilik=65-yas;
    if(emeklilik>0)
    {
        console.log(`${isim} emekli olmanıza ${emeklilik} yıl kaldı`);
    }
    else
        {
            console.log('zaten emekli olmuşsunuz');
        }
}

// geriye değer döndürmediği için herhangi bir değişkene atama yapmamıza gerek yok
EmeklilikHEsapla(1984,'deneme');
