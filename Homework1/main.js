// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello'
console.log(hello);
let owu ='owu'
console.log(owu);
let com = 'com'
console.log(com);
let ua  ='ua'
console.log(ua);
let nam = 1
console.log(nam);
let nam1 = 10
console.log(nam1);
let nam2 = -999
console.log(nam2);
let nam3 = 123
console.log(nam3);
const PI =3.14
console.log(PI)
let nam4 = 2.7
console.log(nam4);
let nam5 = 16
console.log(nam5);
boolean1 = true
console.log(Boolean1);
boolean2 = false
console.log(Boolean2)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName= 'Lybomur';
let middleName= 'Romanovuch';
let lastName= 'Sudilo';
let person =firstName + ' '+middleName+ ' ' +lastName;
console.log(person)



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let surName = prompt('surName');
let midleName =prompt('midleName');
let age =+prompt('Age')
let consol =surName + ' '+midleName+ ' ' +age;
console.log(consol)
