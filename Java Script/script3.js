

// Java Script Operatorler
/*
1. Aritmatik operatorler
2. Atama operatorleri
3. karşılaştırma operatorleri
4. mantıksal operatorler
*/

let   val;
const a=50; // bu atanan değer sabit değerdir const dediğimiz için
const b=25;
let   c=3;
console.log(a+b);

// 1. Aritmatik Operatorler
 val=a+b;  //toplama işlemi
 val=a-b;  // çıkarma işlemi
 val=a*b;  // çarpma işlemi
 val=a/b;  // bölme işlemi
 val=a%b;  // modunu alıyor
 val=c++;  // c değerini val değerinin içine atar daha sonra c değerini arttırır
 val=++c;  // bu şekilde ise c değerini arttırır ve val değerinin içine atar
 val=c--;  // c değerini val değerinin içine atar daha sonra c değerini azaltır
 val=--c;  // bu şekilde ise c değerini azaltır ve val değerinin içine atar

// 2. Atama Operatorleri
 val +=c;      // val=val+c demektir
 val -=c;      // val=val-c demektir
 val *=c;      // val=val*c demektir
 val /=c;      // val=cal/c demektir
 val %=c;   // val=val %c demektir


// 3. Karşılaştırma Operatorleri
val=a==b;
val=b==c;
val=b===c;    // değer kontrolü yapılıyor ve tip kontrolü yapılıyor üç eşittir olanda
val=5===5;    // true yazar
val=5==='5';  // false yazar
val=a!=b;
val=a!==b;    // eşit değil ve tip kontrolü yapıyor
val=a>b;
val=a<b;
val=a>=b;
val=a<=b;
console.log(val);
console.log(typeof val);

// 4. Mantıksal Operatorler

// &&

// true && true=true
// true && false=false
// false && true =false
val=(a>b)&&(B>c);

// ||
// true || true=true
// true || false=true
// false || true =true
// false || false=false
val=(a>b)||(B>c);
//! (not)
//!true=false
//!false=true
val=!(a>b)  // sonuc true ise false , sonuc false ise true yapacak