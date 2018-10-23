/*
ЗАДАНИЕ №1
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
*/
console.log("ЗАДАНИЕ 1");
let number = {
    "единицы": 0,
    "десятки": 0,
    "сотни": 0
};

let a = prompt("Введите число от 0 до 999:");
  

function num(i){  //громоздкая функция для деления числа =) 
    if(i < 1000 && i >= 0){
        number.сотни = (i - (i%100)) / 100;
        number.десятки = (((i - number.сотни * 100)) - (i%10)) / 10;
        number.единицы = i - (number.сотни *100) - (number.десятки * 10);
    } else {
        console.log("Заданное число вне допустимого диапозона")
    }
}
num (a);
console.log(number);

/*
ЗАДАНИЕ №2
Подсчет корзины с объектами
*/
console.log("ЗАДАНИЕ 2");

let tovar = {
    name: "Acer Aspire E5-575G-53V2",
    cost: 39990
};

let tovar1 = {
    name: "X-Box one Gamepad",
    cost: 1250
};

let tovar2 = { //дополнительный объект для увеличения количества их в массиве
    name: "some item",
    cost: 3400
};
let basket = [];

basket = [tovar, tovar1, tovar2]; //корзина с товарами внутри
/*При добавлении товаров в корзину в массив будут помещены объекты товаров через push*/

function countBasket (arr){ //подсчет суммы товаров в корзине. Массив перебирается и из каждого объекта в массиве берется свойство cost
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i].cost;
    }
    return sum;
}

console.log("Общая стоимость товаров равна: " + countBasket(basket)+ " у.е");