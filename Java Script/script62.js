

/*XMLHttpRequest ve promise kullanımı */

// https://randomuser.me adlı siteyi kullanacağız uygulama yaaprken


let myObj={
    url:"https:/randomuser.me/api/?results=5"  /* ?results=5 dersek 5 tane kullanıcı getirir geriye */
}

let req = obj=>{
  return new Promise((resolve,reject)=>{
      let xhr= new XMLHttpRequest();
       xhr.open(obj.method || 'GET',obj.url,true);
        if(xhr.headers)
        {
           Object.keys[obj.headers].forEach(key => {
              xhr.setRequestHeader(key,obj.headers[key]);
           });
        }
        /*onload sonuç olumlu yada olumsuz bilgi döner */
        xhr.onload=()=>{
           if(xhr.status>=200 && xhr.status<300) /*300'den küçük yazdık 200 ok demek 400'ler hatalı olanlar o yüzden 300'den küçük yazdık */
           {
                  resolve(xhr.response);
           }
           else
           {
            reject(xhr.statusText); /* statusText ile hata mesajını yazdırıyoruz */
           }
        }
        xhr.onerror=()=>{
            reject(xhr.statusText); /*error değeri 200 ve 300'den büyük ise o değeri burda karşılamak için onerror içine reject'i koyduk */
        }
        /*body bilgisi istiyor body post işlemlerinde işimize yarıyor form içinden bilgi gönderiyor isek bunu requestin body'si içinde 
        yapıyoruz eğer question bilgisi gönderiyor ise bunları header içine set etmemiz gerek*/
       xhr.send(obj.body);
  });
}

let buildHtml=function(data)
{
    let users=JSON.parse(data); /*json.parse ile datayı dönüştürüyoruz */
    let html="";
    users.results.forEach(user=>{
      html+=`
      <div>
           <img src="${user.picture.medium}">
         <div> 
              ${user.name.title} ${user.name.first} ${user.name.last}
          </div>
      </div>
      `
    });
    document.querySelector('#users').innerHTML=html;

    return Promise.resolve('html yüklendi');
}


req(myObj)
.then(buildHtml)
.then(mesaj=>{
    console.log(mesaj);
})
.catch(error=>{
  console.log(error);
});