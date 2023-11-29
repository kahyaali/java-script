

// Elementler üzerinde gezinme

let val;

let list=document.querySelector('.list-group'); // class'ı list-group olan elementlere ulaştık
val=list; // aldığımız list değerini val'a atadık

val=list.childNodes; // list.childnodes ile ul elementinin alt elemanlarına ulaşıyoruz li ve text elementleride geliyor
/*text node'lar li arasındaki boşluklardır
<li></li> bu şekilde olursa text nodes gelmez <li>  </li> bu şekilde olursa text nodeslar oluşur*/
val=list.childNodes[0]; // index değeri 0 olan elemana ulaşırız
val=list.childNodes[0].nodeName; // nodename ile text değerine ulaşırız
val=list.childNodes[0].nodeType; //
/* nodetype element ise 1 değeri döner
nodetype attribute ise 2 değeri döner
nodetype text node ise 3 değeri döner
nodetype comment yani yorum satırı ise ise 8 değeri döner */



val=list.children; // ul altındaki li elementlerine ulaşıyoruz sadece li elementleri geliyor
val=list.children[0]; // li elementini döndürür
val=list.children[1].textContent='yeni text değeri'; // li elementinin text içeriğini değiştiririz
val=list.children[2].children; // li altındaki elementi verir a elementi koyduk onu verir
val=list.firstChild; // ilk elemanı yazdırır yani ilk node elemanını yazdırır text'te olabilir
val=list.firstElementChild; // burada ilk li elementini yazdırı bunda node yani text yoktur sadece li elementleri vardır
val=list.lastChild; // burda node text elementide gelebilir 
val=list.lastElementChild; // en son li elementini getirir node text yoktur sadece li elementi vardır
val=list.childElementCount; // li elementlerinin sayısını verir 8 tane li elemanı var ve 8 değerini verir element dediği için sadece li elementlerini verir
val=list.parentNode;  // body elementini getirdi parent olarak
val=list.parentElement; // üst elementi getirir
val=list.parentElement.parentElement; // üst elementinde üst elementini getirir
val=list.children[0].nextSibling;
val=list.children[0].nextElementSibling;
val=list.children[0].previousSibling;
val=list.children[0].previousElementSibling;

console.log(val);