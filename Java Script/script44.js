

/*try catch kullanımı */

/*
    1. ReferenceError
    2. TypeError
    3. SyntaxError
    4.URIError
*/

try 
{
    console.log(myFunction());
} 
catch (error)
{
    console.log(error); /*bu şekilde yazarsak çıktısı ReferenceError: myFunction is not defined olur */
    console.log(error.message); /*sadece mesaj kısmını alır çıktı myFunciton is not defined olur */
    console.log(error.name); /* hatanın türünü yazar çıktı ReferenceError olur */
    console.log(error instanceof ReferenceError); /* bu şekilde yazarsak true değeri gelir çünkü ReferenceError'dur */
    console.log(error instanceof TypeError); /* bu şekilde false gelir typeError mu onu kontol eder*/
    console.log(typeof e); /*çıktısı object olur object türündedir */
}


/*sistemin verdiği hatalardan ziyade kendimizde hata fırlatabiliriz */
var user={
    name:'deneme1 deneme2'
}

try 
{
    console.log(user.name);
    if(!user.email) /*mail alanı null ise */
    {
        /*bu şekilde hata mesajı fırlatabiliriz */
        throw new SyntaxError('Kullanıcı mail adresi yok');
        throw new Error('Kullanıcı mail adresi yok');
    }
} 
catch (e) 
{
    console.log(e);
}
finally
{
    /*finaly hata olsada olmasa da her şekilde çalışmaktadır */
    console.log('finaly block')
}