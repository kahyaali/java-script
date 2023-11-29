

/*Destructuring kullanımı ES6 ile geliyor */

/*
     1. Destructuring assigment
     2. Array destructuring
     3. Object destructuring
*/

var a,b,rest;

// 1. Yöntem değer atarken
a=10;
b=20;

// 2. Yöntem değer atarken
[a,b]=[10,20];

[a,b,...rest]=[1,2,3,4,5,6,7,8,9,10];
console.log(a);
console.log(b);
console.log(rest);
/*çıktı a=1 b=2 rest=[3,4,5,6,7,8,9,10] olarak console ekranı çıktısı olur */

// 3.Yöntem değer atama
({a,b}={a:50,b:100});
console.log(a);
console.log(b);

({a,b,...rest}={a:5,b:6,c:10,d:20,e:30});
console.log(a); /*a=5 */
console.log(b); /*b=6 */
console.log(rest); /*rest=[10,20,30]  değerlerini alır*/

// Array destructuring
const arrConfig=['localhost','8080','900'];
//ES5
var server=arrConfig[0];
var port=arrConfig[1];
var timeout=arrConfig[2];
console.log(server,port,timeout);

//Es6 destructuring 
const [server,port,timeout]=arrConfig;
console.log(server,port,timeout);

// Object destructuring

//ES5 
const objConfig={
    server:'localhost',
    port:'8080',
    timeout:900
}

var _server=objConfig.server;
var _port=objConfig.port;
var _timeout=objConfig.timeout;

console.log(_server,_port,_timeout);

// ES6 destructuring
const {_server,_port,_timeout}=objConfig;

console.log(_server,_port,_timeout);

/*timeout değişkenini alır t değişkenine atar */
let{timeout : t}=objConfig;
console.log(t);

/*timeout değeri yok ise undefined yazar yada biz elle değer atması yapabiliriz */
let {server,port,timeout=700}=objConfig;

const gunler=['pazartesi','salı','çarşamba','perşembe','cuma','cumartesi','pazar'];

const[,,crb,,,cmt]=gunler; /*boş geçmek istediğimiz günler için , kullanabiliriz */

console.log(crb,cmt); /*console ekranına çarşamba ve cumartesi yazar */