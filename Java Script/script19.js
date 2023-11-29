

// dom ve event kullanımı--> dom-document object model yapısı

let val;

/*bu şekilde yazınca html sayfasının içeriğini verir bize val = window.document dediğimizde

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="width: 2000px; height: 1000px;">
    <h1 id="header">Java Script Kursu</h1>

    <!--alert uyarı mesajı verdirme-->
    <!-- <script>
        alert("Merhaba");
    </script> -->

    
    <script src="script19.js" type="text/javascript"></script>
</body>
</html> */

val=window.document;
val=document.all;
val=document.all.length;
val=document.all[6];
val=document.head;
val=document.body;
val=document.anchors;
val=document.URL;
val=document.domain;
val=document.images;
val=document.title;
val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;
val=document.scripts;
val=document.scripts[2];
val=document.scripts[2].getAttribute('src');
console.log(val);