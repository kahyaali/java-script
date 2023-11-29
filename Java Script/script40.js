
/*function that return functions -- geriye fonksiyon döndüren fonksiyonlar */

function Soru(hobi)
{
  switch(hobi)
  {
    case 'araba':
        return function(name)
        {
            console.log(name+' bir arabanız var mı?');
        }
        break;

        case 'kitap':
            return function(name)
        {
            console.log(name+' favori kitanız nedir?');
        }
            break;

            case 'yazılım':
                return function(name,type)
        {
            console.log(name+' kullandığınız yazılım programı nedir?'+type);
        }
                break;

                default:
                return function(name)
        {
            console.log('hiç bir soru cevaplanmadı');
        }
  }
}

/*geriye fonksiyon döner */
var soru1=Soru('araba');
soru1('deneme1');

var soru2=Soru('kitap');
soru2('deneme2');

var soru3=Soru('yazılım');
soru3('deneme3','c Sharp');