

// Dom elementi oluşturma -creating element

// creat element

// document.creatElement(); ile elementi oluşturuyoruz bu şekilde bir tane li etiketi oluşturmuş olduk
const li=document.createElement('li');

// add class
// li elementine class ekledik
li.className='list-group-item list-group-item-primary';

// Attribute
li.setAttribute('title','yeni baslik'); // li.setattribute ile title ekledik li elementine
li.setAttribute('data-id',5);

// text-node ekleme li etiketine -append text to li
const text=document.createTextNode('yeni text'); // text node oluşturduk ama bunu li ile ilişkilendirmemiz gerekiyor
li.appendChild(text);

// a etiketi ekleme li etiketine- append a to li
const a=document.createElement('a'); // a elementi oluşturduk
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>' // a etiketi içine iconu ekliyoruz innerHTML komutu ile 
// appendchild ile elementlerin altına istediğimiz etiketleri ekliyoruz
li.appendChild(a);

// ul etiketine li ekleme-append li to ul
// ul listesine yeni bir li etiketi ekledik
document.querySelector('#task-list').appendChild(li); // id değeri task-list olan ul elementini seçiyoruz

console.log(li);
console.log(a);