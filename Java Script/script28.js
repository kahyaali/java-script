

// Local Storage - Local & Session storage

let val;

// bazen bazı verileri tarayıcı hafızasında tutmak isteriz bunun için iki yöntem vardır

/*Not = local storage ile session storage arasındaki fark local storagede sayfa kapansa bile bilgiler kalır geçmişi temizleyene kadar
fakat session storagede bilgiler sayfa kapandığı gibi gider hafızadan silinir */

// 1. yöntem Local Storage
  //       console.log(window.localStorage);
  //       console.log(localStorage); // bu şekilde de yazabiliriz

  // birinci parametrede key değeri veriyoruz ikinci parametrede değerimizi giriyoruz

  // set item - değer girme
const firstname=localStorage.setItem('firstname','deneme1');
const lastname=localStorage.setItem('lastname','deneme2');
console.log(localStorage);

// get item - girilen değeri çağırma
// get item ile local storage de var olan elemanı çağırıyoruz key ifadesi ile firstname deneme1 vardı firstname key değeridir
val=localStorage.getItem('firstname');
console.log(val);

// remove item - girilen değeri silme tek bir değeri siler
localStorage.removeItem('firstname'); // silinecek elemanın key değerini giriyoruz

// clear - tüm elemanları siler
localStorage.clear(); // tüm elemanları siler

// 2. yöntem Session Storage

// set item
const city=sessionStorage.setItem('city','istanbul');
const country=sessionStorage.setItem('county','türkiye')
console.log(sessionStorage);