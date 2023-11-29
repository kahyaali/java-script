

/*getter ve setter kulanımı --- get ve set kullanımı */

/* 1. Yöntem burada fonksiyonlar ile ad soyad bilgileri alıp güncelledik */
const Person={
    ad:'deneme1',
    soyad:'deneme2',
    getfullname:function()
    {
         return console.log(`Ad: ${this.ad} soyad: ${this.soyad}`);
    },

    /*fullname üzerinden gelen bilgiyi ad ve soyad olacak şekilde parçaladık ve ad ile soyad bilgisini güncelledik */
    setfullname:function(value)
    {
        const part=value.split(' ');
        this.ad=part[0];
        this.soyad=part[1];
    }
}


/* 1. Yöntem ad soyad bilgisini güncelleme bu şekilde ad soyad değişikliğini yapabiliriz */
Person.ad='yeniad';
Person.soyad='yeni soyad';
Person.setfullname('deneme3 deneme4');
console.log(Person.getfullname());

/*get ve set komutları ile aynı işlemleri yapma get ve set komutlarını kullanınca fonksiyon tanımlamaya gerek kalmıyor*/

const Person1={
    ad:'deneme1',
    soyad:'deneme2',
    get fullname()
    {
         return console.log(`Ad: ${this.ad} soyad: ${this.soyad}`);
    },

    /*fullname üzerinden gelen bilgiyi ad ve soyad olacak şekilde parçaladık ve ad ile soyad bilgisini güncelledik */
    set fullname(value)
    {
        const part=value.split(' ');
        this.ad=part[0];
        this.soyad=part[1];
    }
}

console.log(Person1.fullname);
Person1.fullname='deneme3 deneme4';
console.log(Person1.fullname);
console.log(Person1);


/*3. Yöntem */
const Person2={
    ad:'deneme1',
    soyad:'deneme2',
}

Object.defineProperty(Person2,'fullname',{
    get function()
    {
         return console.log(`Ad: ${this.ad} soyad: ${this.soyad}`);
    },

    /*fullname üzerinden gelen bilgiyi ad ve soyad olacak şekilde parçaladık ve ad ile soyad bilgisini güncelledik */
    set function(value)
    {
        const part=value.split(' ');
        this.ad=part[0];
        this.soyad=part[1];
    }
})

console.log(Person2.fullname);
console.log(Person2.fullname='deneme5 deneme6');
/*writable default olarak false gelir age değerini sadece okuyabiliriz dışarıdan değiştiremeyiz
eğer değiştirmek istersekte writable değerini true yapmamız gerekir */
Object.defineProperty(Person2,'age',{
    value:50,
    Writable:true
})

Person2.age=70;
console.log(Person2.age);