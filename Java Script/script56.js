

/*asynchronous kullanım--asenkron kullanım */

// Sekonder single thread model
/*3 tane görev tanımladık varsayarsak bir görevin bitsin ki diğer görev işlemci tarafından ele alınsın bu şekilde
diğer görevleri blockluyor işlemci sadece o görevi bitirmeye odaklanıyor görev bittikten sonra diğer göreve geçiyor
 */

// Asenkron işlem multi thread model
/*
    asenkron işlemlerini 
    1. callback
    2. promise
    3. async/await ile yapabiliyoruz
*/

/*fonksiyon tanımlyoruz */
const first=()=>{
  console.log('first');
  second();
}

const second=()=>{
     /*2 sn gecikmeli başlatacak ilk önce first sonra third 2 saniye sonra second yazar */
    setTimeout(()=>{
        console.log('second');
    },2000);
    third();
}

const third=()=>{
    console.log('third');
}

first();