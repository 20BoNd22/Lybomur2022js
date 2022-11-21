// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !==0 )
{console.log('Yes')}
else
{console.log('No')}

let a = 0;
if (a !==0 )
{console.log('Yes')}
else
{console.log('No')}

let b = -3;
if (b !==0 )
{console.log('Yes')}
else
{console.log('No')}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let Time = 1
if (Time >=0 && Time <=15)
{
    console.log('First')
}
else if (Time >=15 && Time <=30)
{
    console.log('Second')}
else if (Time >=30 && Time <=45)

{
    console.log('Third')}
else if (Time >=45 && Time <=59)
{
    console.log('Fourth')}
else
{
    console.log('Error')}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let Day = 21
if (Day >=1 && Day <=10)
{
    console.log('First')
}
else if (Day >=10 && Day <=20)
{
    console.log('Second')}
else if (Day >=20 && Day <=31)

{
    console.log('Third')}

else
{
    console.log('Error')}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let Week =+prompt()
switch (Week)
{
   case 1:
       console.log('Monday');
       break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log(Error);
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let v = 20;
let o = 25;
if (v>o)
{console.log(v)}
else if(o>v)
{console.log(o)}
else if (v===o)
{console.log('levels')}
else
{console.log('Eroor')}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)


let g = 0
if(g)
{console.log(Hello)}
else
{console.log('Default')}