

/* numeric range kullanımı örnek call apply ve bind kullanımı ile */

var num1={
    min:0,
    max:100,
    checkNumericRange:function(value)
    {
        if(typeof value === Number) /*tipi number değilse false döndürdük */
        {
           return false;
        }
        else
        {
              return value>=this.min && value<=this.max;
        }
    }
}

console.log(num1.checkNumericRange(20)); /*true değer döner */
console.log(num1.checkNumericRange(-20)); /*false değer döner */

var num2={
    min:0,
    max:100,
    checkNumericRange:function(value)
    {
        if(typeof value !== 'number') /*tipi number değilse false döndürdük */
        {
           return false;
        }
        else
        {
              return value>=this.min && value<=this.max;
        }
    }
}

console.log(num2.checkNumericRange(20)); /*true değer döner */
console.log(num2.checkNumericRange(-20)); /*false değer döner */

var num3={min:50,max:70};

console.log(num1.checkNumericRange.call(num3,55)); /*this yerine num3 yazdı num3.min num3.max ile 55 değerini karşılaştırdı */
console.log(num1.checkNumericRange(num3,[40])); /*apply parametre alan fonksiyonlarda dizi şeklinde gönderir veriyi */
var checkNumber=num1.checkNumericRange.bind(num3);
console.log(checkNumber(60));

