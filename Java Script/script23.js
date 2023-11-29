

// Dom elementlerini silme - removing changing nodes

const tasklist=document.querySelector('#task-list'); // id değeri task-list olan ul elementini buluyoruz

// removing element - element silme
// tasklist.remove(); // ul listesini siler 

// childNodes 1. text değerleri ve li elementleri yer alır
    tasklist.childNodes[7].remove();
    tasklist.children[0].remove(); // children sadece li elementlerini verdiği için 0 index'li li elementini siler
    tasklist.removeChild(tasklist.children[0]); // tasklist.children[0] ile aynı işlemi yapar

// removing attribute - attribute silme 
     tasklist.children[0].removeAttribute('class'); // index numarası 0 olan li elementinin class'ını siler class olmayan li elementi haline gelir


// replacing element - mevcut element yerine başka bir element atama
const cardheader=document.querySelector('.card-header');


// creat element
// h2 elementi oluşturduk class olarak card-header atadık
// div etiketi vardı class card-header olan h2 etiketi ile değiştirmiş olduk
const h2=document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('yeni notum'));

// parent elementi bulup seçtik
const parent=document.querySelector('.card');
parent.replaceChild(h2,cardheader); // div elemetini h2 elementi ile değiştirdi


// classes
let val;
let link =tasklist.children[0].children[0]; // element içindeki alt elementi seçiyoruz
val=link.className;
val=link.classList;
val=link.classList[0];
val=link.classList[1];

link.classList.add('new');
link.classList.remove('new');

// Attributes
val=link.getAttribute('class');
val=link.getAttribute('data-id');
val=link.setAttribute('href','http://google.com'); 
val=link.hasAttribute('href'); // verilen href attributesi var mı yok mu onu kontrol eder var ise geriye true döner yok ise false döner
val=link.hasAttribute('data-val'); // verilen data-val attributesi var mı yok mu onu kontrol eder var ise true yok ise false döner



console.log(val);
console.log(cardheader);
console.log(tasklist);
