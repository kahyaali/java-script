

/*
Dışarıdan name ve salary bilgilerini alan employe constructor oluşturacağız
yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyon oluşturacağız

Vergi Dilimleri
1. 20.000'e kadar %20 vergi
2. 30.000'e kadar %25 vergi
3. 30.000'den sonra %30 vergi
 */

function Employee(name,salary)
{
    /*ğer Employee'den türeyen bir nesne değil ise new ile biz kendimiz oluşturuyoruz ve parametreleri girerek objeyi geriye döndürüyoruz */
    if(!(this instanceof Employee))
    {
        return new Employee(name,salary);
    }
   this.name=name;
   this.salary=salary;
}

Employee.prototype.calculateSalary=function()
{
    /*0.inexten başladığı için içinde bulunduğumuz ayı elde etmek için  +1 ekliyoruz */
    var month=new Date().getMonth()+1;
    var tax=0;
    total=this.salary*month;
    if(total<=20000)
    {
        tax=total*0.2;
    }
    else if(total>20000 && total<=30000)
    {
        tax=total*0.25;
    }
    else
    {
        tax =total*0.3;
    }
    return {
        tax : tax,
        paid : total - tax
    }
}

var emp1=new Employee('deneme1',3000);
var emp2=new Employee('deneme2',5000);
console.log(emp1.calculateSalary());


console.log(emp1);