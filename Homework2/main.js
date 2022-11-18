// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1,2,3,4,5,'ok','yes','good',9,10]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book =
    {title: 'Ukraine',
        pageCount: 500,
            genre:'Histori'}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 =
    {title: 'Ukraine',
        pageCount: 500,
        genre:'Histori',
        authors:[
            {name:'Володимир В`ятрович',
            age:85},
            {name:'Микола Аркас',
                age:75}
        ]}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users =[
    {   name:'Talian1',
        username:'Boss',
        password:25523465},
    {   name:'Talian2',
        username:'Boss',
        password:255355},
    {   name:'Talian3',
        username:'Boss',
        password:2534655},
    {   name:'Talian4',
        username:'Boss',
        password:2523455},
    {   name:'Talian5',
        username:'Boss',
        password:255455},
    {   name:'Talian6',
        username:'Boss',
        password:252355},
    {   name:'Talian7',
        username:'Boss',
        password:2565755},
    {   name:'Talian8',
        username:'Boss',
        password:256455},
    {   name:'Talian9',
        username:'Boss',
        password:254355},
    {   name:'Talian10',
        username:'Boss',
        password:2532455},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

