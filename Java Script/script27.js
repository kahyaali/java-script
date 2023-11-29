

// event bubbling

const form=document.querySelector('form'); // form elementini seçiyoruz
const cardbody=document.querySelector('.card-body');
const card=document.querySelector('.card');
const container=document.querySelector('.container');



// true yazdık en dıştan en içe doğru sıralamay yapması için
form.addEventListener('click',function(e){
console.log('form');
e.stopPropagation();
},true);

cardbody.addEventListener('click',function(e){
    console.log('card-body');
    e.stopPropagation();
    },true);

card.addEventListener('click',function(e){
        console.log('card');
        e.stopPropagation();
        },true);

container.addEventListener('click',function(e){
            console.log('container');
            e.stopPropagation();
            },true);