

document.querySelector('#getEmplooye').addEventListener('click',loadEmplooye);

function loadEmplooye()
{
      /*fonksiyonu çağırdığımzda img görünür hale gelecek */
 var loadimg=document.querySelector('#loading');
 loadimg.style.display='block';


 const xhr=new XMLHttpRequest(); /*xhr nesnesi oluşturduk */
 xhr.open('GET','emplooyes.json',true); /*emplooyes.json dosyasından oku diyorum */

 setTimeout(()=>{

   /**onload sorgunun sonlandığını bize söylüyor onload çalışıyorsa response geriye dönmüş demektir fakat başırılımı error mu 
    * döndü kontrol etmek gerek
   */
 xhr.onload=function()
 {
    loadimg.style.display="none"; /*işlem tamamlanınca tekrar img elementini kapatıyoruz */
     if(this.status===200) /*dönen sonuç başarılı ise responsetxt'i ekrana yazdırabiliriz */
     {
         /*gelen bilgi string tipte bir obje değil kullanabilmek için objeye çevirmek gerek Json.parse ile objeye çevirdik */
         let emp=JSON.parse(this.responseText);

         let html=""; /*bu şekilde tanıtmaz isek ilk satırı undefined olarak getirir ilkinde null tanıtıyoruz içeriğini */
        
         emp.forEach(element => {
             html+=`<tr>
                  <td>${element.ad}</td>
                  <td>${element.soyad}</td>
                  <td>${element.yas}</td>
                  <td>${element.retired}</td>
             </tr>`;
         });
         document.querySelector('#emplooyes').innerHTML=html;
     }
 }
    xhr.send();
 },2000);



   
  
}