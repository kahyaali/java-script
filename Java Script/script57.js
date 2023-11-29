

/*ajax xhr object kullanımı */


/*Asynchronous Javascript And Xml --- ajax */
/*
   client --------------------------------HttpRequest------------------------------------------>Server
   client <-------------------------------HttpResponse-----------------------------------------Server

   client ------------->HttpRequest ---------->ajax-------->XmlHttpRequest--------------------->Server
   client <-------------HttpResponse <--------- ajax<--------Xml/json/file<---------------------Server

*/

/*
    readyState özellikleri
    0: request not initialized
    1: server connection established
    2: requst received
    3: processing request
    4: request finished and response is ready
*/
/*
    status mesajları
    200: ok
    403: forbidden
    404: not foun

*/

var xhr=new XMLHttpRequest();
/*herhangi bir olay değiştiğinde tetiklenecektir ve istediğimiz değerleri yazabiliriz */
xhr.onreadystatechange=function()
{
    // readyState sunucu hazır bilgisi 4 değerini verir 200 başarılı bir sonuç üretmiş mi
   if(xhr.readyState===4)
   {
      if(xhr.status===200)
      {
         console.log(xhr.responseText); /*sunucudan aldığı bilginin içeriğii responseText ile console ekranına yazdırır */
      }
      else if(xhr.status===404)
      {
        console.log('kaynak bulunamadı');
      }
   }
}


/*süreç devam ederken işlemler yapmak istenir ise kullanılabilir */
xhr.onprogress=function()
{
    console.log('on progress');
}

/*serverden bilgi talep ederken get komutunu kullanırız 
 serverde bilgi güncellerken yada bilgi yazarken post komutunu kullanırız 
 true dersek sorguyu asenkron olarak ele alır false dersek senkron olarak ele alır istek sonuçlanmadan başka istek almaz
*/
xhr.open('GET','msg.txt',true);
xhr.send(); /*sunucuya gönderdik */

console.log('merhaba');