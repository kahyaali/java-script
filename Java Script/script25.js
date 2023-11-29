

// mouse events - mouse laylarını inceleme

const btn=document.querySelector('#btndeleteall');
     //const ul=document.querySelector('ul'); // bu şekilde direk ul elementini yaza biliriz
const ul=document.querySelector('#task-list'); // olarak id yada class ismini vererekte seçebiliriz

// butona eventlistener ekliyoruz click
btn.addEventListener('click',eventHandler);
ul.addEventListener('click',eventHandler);

// double click eventi dblclick 
// butona double click olunca consol ekranına event.type double click yazacak
      btn.addEventListener('dblclick',eventHandler);

// mouse down
// mouse ile butona basınca mousedown yazıyor console ekranına
        btn.addEventListener('mousedown',eventHandler);

// mouse up
// mouse ile butona tıklayıp bırakınca mouse up yazıtor console ekranına
         btn.addEventListener('mouseup',eventHandler);

// mouse enter
// mouse ile butonun üzerine gelince mouse enter yazıyor console ekranında
          btn.addEventListener('mouseenter',eventHandler);

// mouse leave
// mouse ile butonun üzerinde ayrılınca mouse leave yazıyor console ekranında
           btn.addEventListener('mouseleave',eventHandler);

//mouseover
// mouse ile butonun üzerine gelince mouse over yazıyor console ekranında
              btn.addEventListener('mouseover',eventHandler);

//mouseout
// mouse ile butonun üzerinden ayrılınca mouse out yazıyor console ekranında
              btn.addEventListener('mouseout',eventHandler);


// mouse move
// mouse hareket ettiği sürece event yazar console ekranına
               btn.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type: ${event.type}`);
}