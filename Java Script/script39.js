

/*Immediate function */

/*fonskiyonun bir kere çalışmasını isteyebiliriz örneğin sayfa yüklenince bir kere çalışmasını istediğimiz fonksiyonları immediate
fonksiyon olarak tanımlayabiliriz */

function welcome()
{
    var gunler=['pazar','pazartesi','salı','carsamba','persembe','cuma','cumartesi'];
    var today=new Date();
    var mesaj='welcome. today is '+gunler[today.getDay()];
    return mesaj;
}

console.log(welcome());


/*Immediate function kullanımı */

/*1. Yöntem immediate function oluşturma parantezleri ister süslü paranteden sonra istersek dış parantezden sonra açabiliriz */
(function(){

}());

/*2. yönetm immediate function oluşturma*/
(function(){

})();


/*immediate fonskiyona herhangi bir isim vermiyoruz */
(function(name){
    var gunler1=['pazar','pazartesi','salı','carsamba','persembe','cuma','cumartesi'];
    var today1=new Date();
    var mesaj1='welcome '+name+'today is '+gunler1[today1.getDay()];
    console.log(mesaj1);
}('deneme1')); /*dışarıdan gelen bilgiyi buradaki parantezler içerisine yazıyoruz */