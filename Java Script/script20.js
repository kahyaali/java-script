

// Tekil element seçimi - selecting elements

// Single elements
// tek element seçerken id başlığı ile seçiyoruz document.getElementById komutu ile
let val;
val=document.getElementById('header'); // id değeri header olan elementi seçtik
val=document.getElementById('header').id; // burada da id başlığını seçtik header olarak gelir
val=document.getElementById('header').className; // burada bize id header olan elementin classname değerini verir

// id ve classname değerlerini bu şekildede alabilirim çünkü al değişkenine atadık değerleri
val=val.id;
val=val.className;

val.style.fontSize='45px'; // bu şekilde id değeri header olan elemente fontsize değeri verebiliriz
val.style.color='red'; // id değeri header olan elementin rengini değiştirebiliriz
val.style.fontWeight='bold'; // yazı kalınlığını değiştirebiliriz
val.style.display='none'; // display özelliğini değiştirebiliyoruz none yaptık

val=document.getElementById('header').innerText='yeni h1 başlığı'; // bu şekilde h1 etiketinde html başlığını değiştiriyoruz


val=document.getElementById('header').innerText='<b>yeni h1 başlığı</b>'; // bu şekilde h1 etiketinde html başlığını değiştiriyoruz ama b etiketlerinide gösterir text olarak

val=document.getElementById('header').innerHTML='<b>Yeni h1 başlığı</b>'; // bu şekilde yazarsak b etiketlerini görmez yeni h1 başlığını yazar text olarak

console.log(val);


// document.queryselector() kullanımı
// document.getElementById gibi işlem yapabiliriz
// eğer aynı id veya class değerlerinde birden fazla var ise ilk bulduğunu seçer
console.log(document.querySelector('#header')); // id değerine göre seçim olduğu için # işaretin koyduk
console.log(document.querySelector('.header-title')); // clasa göre seçim yaptımız için . işaretini kullandık
console.log(document.querySelector('h1')); // ilk bulduğu h1 elementini seçer
console.log(document.querySelector('div')); // ilk bulduğu div elementini seçer
console.querySelector('li').style.color='red'; // ilk bulduğu li elementinin rengini kırmızı yapar
document.querySelector('li:last-child').style.color='blue'; // son li elementinin rengini mavi yapar
document.querySelector('li:nt-child(2)').style.color='yellow'; // ikinci elemanın rengini sarı yapar
document.querySelector('li:nth-child(3)').textContent='task-item'; // li elementinin textini değiştirir
document.querySelector('li').className='list-group-item list-group-item-primary' // classname list-group-item olan elementlerin rengini değiştirdi; 
document.querySelector('li').classList.add('active'); // classlist.add ile class'a yeni ifade ekliyoruz
// Not = classname ile var olan class ismini siler yeni class isimleri ekleyebiliriz classlist.add ile class'a yeni eklemeler yapabiliriz

// Not = tek element seçerken document.getElementById ve document.queryselector ifadelerini kullanırız

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multiple elements

// class name'e göre seçim yapma

document.getElementsByClassName(); // classname değerine göre seçim yapıyor

let val1;
val1=document.getElementsByClassName('list-group-item'); // class tanımı list-group-item olan tüm elementleri getirir dizi olarak
val1=document.getElementsByClassName('list-group-item')[0]; // bu class'a uyan tüm elementler gelir [0] index  değeri ilk olan element gelir tek bir elementi almış oluruz
val1=document.getElementsByClassName('list-group-item')[2]; // bu class'a uyan tüm elementler gelir [2] index  değeri 2 olan element gelir tek bir elementi almış oluruz
val1=val1[2]; // aldığımız değerler val değişkenine atandığı için bu şekilde de alabilirz tek olarak istediğimiz elementi
val1=val1[1].style.fontSize='40px'; // bu şekilde fontsize değerini değiştirebiliriz
val1=val1[2].style.color='blue'; // rengini değiştirebiliriz
val1=val1[0].textContent='Yeni text değeri'; // tect değerini değiştirebiliriz

// for döngüsü ile tüm list-group-item olan elementlerinin rengini kırmızıya text değerini yeni text değeri ile değiştirdik
for(let i=0;i<val1.length;i++)
{
    console.log(val1[i].style.color='red');
    console.log(val1[i].textContent='yeni text değeri');
}

// TagName'e göre seçim yapma
// tagname dediği html etiket başlıklarıdır

document.getElementsByTagName(); // tagname değerine göre seçim yapıyor
val1=document.getElementsByTagName('li');
val1=getElementsByTagName('a');

/*burada getElementById ile id değeri task-list olanı aldık val1 değişkenine val1 deişkenindende tagname değeri a olanları aldık
yani id değeri verilen ifadenin tagname'ni aldık tagname'i a olan tüm elementleri almadık
*/

val1=document.getElementById('task-list');
val1=val1.getElementsByTagName('a');

//queryselectorAll ile çoklu seçim yapma
document.querySelectorAll(); // queryselectorAll ile toplu seçim yapabiliriz

val1=document.querySelectorAll('li'); // etiketi li olan tüm elementleri getirir foreach ile tek tek hepsine ulaştık
val1.forEach(function(item){
  console.log(item);
});

val1.forEach(function(item,index){
  item.textContent=`${index}-hello`;
});

val1=document.querySelectorAll('li:nth-child(odd'); // index numarası tek olan elementleri getirir

val1.forEach(function(item){
    item.style.background='red';
});

console.log(val1);