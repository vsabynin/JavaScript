//Урок 1

// console.log (222)

// let myName = "Ivan"

// console.log(myName);

// let planetName // переменная для "названия нашей планеты"
// let userTime  // переменная для "текущее время пользлователя"
// let articleNumber // переменная которая показывает "количество статей"
// let hasMoney //Переменная которая показывает "это оплата наличными деньгами или нет?"
// // Три переменные для хранения Ф.И.О
// const firstName = 'Ivan'
// const middleName = 'Andreevich'
// const lastName = 'Sabynin'

// console.log (firstName, middleName, lastName)

// ------------------------------------------------------------------------------------------


//Урок 2

//Инструкция if (условие) {инструкция}:

// const a = 54;

// if (a>3) {
//     console.log("Условие сработало!");
// }

// // ==>  Инструкция else {инструкция}

// const b = -56;

// if (b > 3) {
//     console.log("Условие сработало!");
// } else {
//     console.log("b < 3");
// }

// ==> Инструкция else if (условие) {инструкция}
// const c = -54; // ==> Если значение поменять на '3' условие отработает 

// if (c === 3) {
//     console.log("c === 3");
// } else if (c === 4) {
//     console.log("c === 4");
// } else if (c === 5) {
//     console.log ("c === 5");
// } else {
//     console.log("Я не знаю чему равно с");
// }


// Условный оператор "?" (тенарный оператор) 

// ==> let result = условие ? значение №1 : значение №2

// 1-ая конструкция
// const result = a > 3 ? "a > 3" : "a <= 3"

// 2-ая конструкция 
// let result;
// if (a > 3) {
// result = "a > 3";
// } else {
//     result = "a <= 3";
// }
// console.log(result);

// Конструкция "switch" (является аналогом для нескольких блоков if..else if.. более удобен)

const role = "user";

switch(role) {
    case "user": {
        console.log("Вам разрешено доступ в личный кабинет");
        break;
    }
    case "manager": {
        console.log("Вам разрешен доступ в панель добавления контента");
        break;
    }
    case "admin": {
        console.log("Вам разрешен доступ в админку");
        break;
    }
    default: {
        console.log("Авторизируйтесь")
    }
}


