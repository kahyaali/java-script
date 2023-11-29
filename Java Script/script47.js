

/*Spread Operator kullanımı ES6 ile geliyor*/


function getTotal(a,b,c)
{
    return a+b+c;
}

console.log(getTotal(3,4,5));

let numbers=[10,20,30];

//ES5 ile kullanım
/*apply parametre alan fonksiyonlarda dizi olarak iletirdi function olmadığı için null yazdık ilk parametreye */
console.log(getTotal.apply(null,numbers)); 


// ES6 ile kullanım spread kullanımı
/*... dedik sonra dizinin adını yazdık */
console.log(getTotal(...numbers));

let arr1=['iki','üç'];
let arr2=['bir','dört','bes'];
let arr3=['bir',...arr1,'dört','beş'];
arr1.push(...arr2); /*push ile arr1'e arr2'yi ekledik sona ekliyor elemanları*/
arr1.unshift(...arr2); /*bu başa ekliyor elemanları */

/*bu şekilde yazarsak bir dört ve bes arr1'in elemanları gibi davranır
arr1.push(arr2) yazarsak iki ve üç arr1'in elemanı arr2 arr1 içinde array olarak görünürdü 
arr1['iki','üç' ['bir','dört','bes']] şeklinde görünürdü*/
console.log(arr3);