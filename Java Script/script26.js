

// Keyboard events - klavye eventlerini yakalama

const input=document.querySelector('#txttextname'); // input elementini seçtik input değişkenine atadık tüm özelliklerini

    input.addEventListener('keydown',eventHandler);  // tuşa bastığımda
    input.addEventListener('keyup',eventHandler);    // tuşu bıraktığımda
    input.addEventListener('keypress',eventHandler);  // tuşa bastığımda
    input.addEventListener('focus',eventHandler);   // input elementine mouse ile tıklayınca imlec orda belirince
    input.addEventListener('blur',eventHandler);  // mouse ile input içinden çıkıp input elementini terk edince blur yazar console ekranına
    input.addEventListener('cut',eventHandler); // input içindeki herhangi bir yazıyı cut kestiğimizde console ekranında cut yazar
    input.addEventListener('paste',eventHandler); // input elementine birsey yapıştıdığımızda console ekranında paste yazar

// fonksiyon oluşturduk dışarıdan e değerini alacak
function eventHandler(e){
    console.log('even type: '+e.type); // tuşa basında console ekranında keydown ve keyup yazıyor yani bir tuşa basınca ve bırakınca
    console.log('key code: '+e.keyCode); // key code biz ascii karşılığını verir basılan tuşun
    console.log('value: '+e.target.value); // klavyeden hangi tuşa basarsak o basılan tuşun kendisini verir
    e.target.style.backgroundColor='red';  // mouse ile input elementine tıklayınca arka plan rengini kırmızı yapar
}