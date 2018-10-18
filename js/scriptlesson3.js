/*
ЗАДАНИЕ №1
С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/
console.log("ЗАДАНИЕ 1");

function isPrime(num) {  //функция проверки числа на простоту
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
        return false;
    }
    return true;
}

var i = 0;
while(i < 100) {
    if(isPrime(i)) console.log(i);
    i++;
}

/*
ЗАДАНИЕ №2
С помощью цикла do…while написать функцию для вывода чисел от 0 до 10
*/
console.log("ЗАДАНИЕ 2");

var number = 0;

do {
     if(number == 0){
         console.log(number + " - " + "ЭТО НОЛЬ")
    }
    else if(number % 2 == 0){
        console.log(number + " - " + "ЧЕТНОЕ ЧИСЛО")
    }
    else if (number % 2 != 0) {
        console.log(number + " - " + "НЕЧЕТНОЕ ЧИСЛО")
    }
    number++;
}
while (number <= 10);


/*
ЗАДАНИЕ 3
Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
*/
console.log("ЗАДАНИЕ 3");

for (let i = 0; i <= 9; console.log(i++)){}

/*
ЗАДАНИЕ №4
Нарисовать пирамиду с помощью console.log
*/
console.log("ЗАДАНИЕ 4");

console.log("Вариант с массивом");
let letters = ["x"];
for (let i = 1; i <= 20; i++){
    console.log(letters);
    letters.push("x");
}

console.log("Вариант с переопределением переменной");
let a = "x";
for (let i = 1; i <= 20; i++){
console.log(a);
a = a + "x";
}

/*
ЗАДАНИЕ №5
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
*/
console.log("ЗАДАНИЕ 5");

let basket = [570, 3999, 1070]; //корзина с "товарами" внутри

function countBasket (arr){ //подсчет суммы товаров в корзине
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log("Общая стоимость товаров равна: " + countBasket(basket)+ " у.е");
