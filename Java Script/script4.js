
// Dates ve Times

// uzun tarih ve saat veriyor
let d=new Date();
console.log(d);
console.log(typeof d); // object olarak verir tipini 

console.log(d.getDate());        // ayın günü verir
console.log(d.getDay());         // haftanın gününü verir
console.log(d.getFullYear());    // yıl bilgisini verir
console.log(d.getMonth());       // ay bilgisini verir
console.log(d.getHours());       // saat bilgisini verir
console.log(d.getMinutes());     // dakika bilgisini verir
console.log(d.getSeconds());     // saniye bilgisini verir  

// Set methods
// elimizdeki tarih objesinde istedğimiz kısımları arttırabiliriz set ibaresini kullanarak
let d1=new Date();
d1.setFullYear(2020);
d1.setMonth(10);
d1.setDate(20);
d1.setHours(13);
d1.setMinutes(40);
d1.setSeconds(30);

console.log(d1.getDate());        // ayın günü verir
console.log(d1.getDay());         // haftanın gününü verir
console.log(d1.getFullYear());    // yıl bilgisini verir
console.log(d1.getMonth());       // ay bilgisini verir
console.log(d1.getHours());       // saat bilgisini verir
console.log(d1.getMinutes());     // dakika bilgisini verir
console.log(d1.getSeconds());     // saniye bilgisini verir  

let birthday=new Date(1984,1,20); // vermiş olduğumuz değeri tarihe çevirdik ve doğum tarihini hesapladık
console.log(d.getFullYear()-birthday.getFullYear());

let dtc= new Date('1/1/1990');

// Get Methods
// get komutu yardımı ilede tarih formatı içerisindeki istedğimiz alanları parça parça alabiliriz
console.log(d.getDate());        // ayın günü verir
console.log(d.getDay());         // haftanın gününü verir
console.log(d.getFullYear());    // yıl bilgisini verir
console.log(d.getMonth());       // ay bilgisini verir
console.log(d.getHours());       // saat bilgisini verir
console.log(d.getMinutes());     // dakika bilgisini verir
console.log(d.getSeconds());     // saniye bilgisini verir  