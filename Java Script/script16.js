

// Function uygulamaları

var hesapA={
    ad: 'deneme1 Deneme2',
    hesapno: '123456',
    bakiye: 2000,
    ekhesap:1000
}

var hesapB={
    ad:'deneme3 deneme4',
    hesapno:'135789',
    bakiye:5000,
    ekhesap:2000
}


/*fonsiyona hesapA adresinin kopyasını göndermiyoruz adresini gönderiyoruz o yüzden hesapA daki bilgileri 
fonksiyon içinde hesap üzerinde değişiklik yaparak güncelleyebiliyoruz bu sebeple hesapA hesapB gibi bilgileri object olarak tuttuk*/
function paracek(hesap,miktar)
{
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.bakiye>=miktar)
    {
        hesap.bakiye=hesap.bakiye-miktar;
        console.log('paranızı alabilirsiniz');
    }
    else
    {
        var toplam=hesap.bakiye+hesap.ekhesap;
        if(toplam>=miktar)
        {
            // confirm dediğimiz için ekranda bize uyarı penceresi açıyor
            if(confirm('ek hesabınızı kullanmak istermisiniz'))
            {
               
                console.log('paranızı alabilirsiniz');
                var bbakiye=hesap.bakiye;
                var ekhesapmiktar=miktar-bbakiye; // ek hesaptan çekilecek tutatı belirliyoruz
                hesap.bakiye=0; // hepsini kullandık bakiyenin
                hesap.ekhesap=hesap.ekhesap-ekhesapmiktar;
            }
            else
            {
                console.log(`${hesap.hesapno} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }
        else
        {
            console.log('bakiyeniz yetersiz...');
        }
        
    }
}

paracek(hesapA,2500);
//paracek(hesapB,7000);