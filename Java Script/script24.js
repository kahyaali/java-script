

// event listeners

const btn=document.querySelector('#btndeleteall'); // id değeri btndeleteall olan elementi getirir

// btn elementini aldık şimdi bu btn elementine event ekleyeceğiz butona tıklayınca btn clicked yazacak ekrana 
// 1. yöntem
btn.addEventListener('click',function(){
    console.log('btn clicked');
});

// 2. yöntem
btn.addEventListener('click',btnclick());

function btnclick(){
    console.log('buton tıklandı');
}

btn.addEventListener('click',function(e){
   let val;

   val=e;
   val=e.target; // hangi butonun tıklandığını bize veriyor
   val=e.target.id; // tıklanan butonun id değerini verir bizdeki btndeleteall
   val=e.target.classList; // butona atanmış olan class değerleri var ise onları verir
   val=e.type; // butona tıklanınca hangi event olayı oldu ise onu verir biz tıkladığımız için click olarak geldi
   console.log(val);
   e.preventDefault();  // scroll bar yerinde kaldı sayfayı refresh etmesini engelledik

});