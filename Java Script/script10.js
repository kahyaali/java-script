

// switch case kullanımı
// switc ile değişkeni case ile de içeriklerini kontol ediyorum

let category='telefon';
let day;
let age=10;
let firstname= 'Kütahya';

switch(category)
{
   case 'telefon':
    console.log('telefon kategorisi');
    break;

    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
        break;
        
        default:
            console.log('uygun kategori bulunamadı');
            break;
}

switch(new Date().getDay())  // 0 ile 6 arası değer verir
{
    case 0:
        day ='pazar';
        break;

        case 1:
            day ='pazartesi';
            break;

            case 2:
                day ='salı';
                break;

                case 3:
                    day ='çarşamba';
                    break;

                    case 4:
                        day ='parşembe';
                        break;

                        case 5:
                            day ='cuma';
                            break;

                            case 6:
                                day ='cumartesi';
                                break;
                                default:
                                    day ='Gün bulunamadı';
                                    break;
}
switch(new Date().getDay())
{
    case 0:
    case 6:
            day ='hafta sonu';
            break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            day ='hafta içi';
            break;
}
console.log('bugün günlerden : '+day);

switch(true)
{
    case age>0 && age<12:
        console.log(`${firstname} is a child`);
        break;
}