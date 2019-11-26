// 1 Дан код:   var a = 1, b = 1, c, d;

  /*
c = ++a; alert(c);           // 2 префикс. Инкремирование происходит сразу, обновля значение а
d = b++; alert(d);           // 1 пострифкс. Инкремирование произойдет потом, возвращая значение b без изменений.
c = (2+ ++a); alert(c);      // 5  Значание а в памяти будет сразу икремирвоано до 3.
d = (2+ b++); alert(d);      // 4  Значание b в памяти как 2, а тока после вычеслений инкремирвоано до 3.
alert(a);                    // 3   Все как в жизни, дороги может и одинаковы, итоги разные. Но приходит все к одному значению.
alert(b);                    // 3   Все как в жизни, дороги может и одинаковы, итоги разные. Но приходит все к одному значению.
   */


// 2. Чему будет равен x в примере ниже?
//var a = 2;
// var x = 1 + (a *= 2);

// Равен будет 6. Ну вот так вот.

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//
//     если a и b положительные, вывести их разность;
//     если а и b отрицательные, вывести их произведение;
//     если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = +prompt('Укажи чило a:');
var b = +prompt('Укажи чило b');

if (a > 0 && b >0 ) {
    alert ('Значение положительные. Разность: ' + Math.abs(a - b));
}
if (a < 0 && b < 0 ) {
    alert ('Значение отрицательные. Произведение: ' + (a * b));
}
if ((a >= 0 && b < 0 ) || (a < 0 && b >= 0 )) {
    alert ('Значение имеют разные знаки. Сумма: ' + (a + b));
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
function task_4 () {
    var a = Math.floor (Math.random () * 15);
    console.log (a);
    switch (a) {
        case 0: console.log(a,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15); break;
        case 1: console.log(a,2,3,4,5,6,7,8,9,10,11,12,13,14,15); break;
        case 2: console.log(a,3,4,5,6,7,8,9,10,11,12,13,14,15); break;
        case 3: console.log(a,4,5,6,7,8,9,10,11,12,13,14,15); break;
        case 4: console.log(a,5,6,7,8,9,10,11,12,13,14,15); break;
        case 5: console.log(a,6,7,8,9,10,11,12,13,14,15); break;
        case 6: console.log(a,7,8,9,10,11,12,13,14,15); break;
        case 7: console.log(a,8,9,10,11,12,13,14,15); break;
        case 8: console.log(a,9,10,11,12,13,14,15); break;
        case 9: console.log(a,10,11,12,13,14,15); break;
        case 10: console.log(a,11,12,13,14,15); break;
        case 11: console.log(a,12,13,14,15); break;
        case 12: console.log(a,13,14,15); break;
        case 13: console.log(a,14,15); break;
        case 14: console.log(a,15); break;
        default: console.log('Пятнадцать! ;%я точно ТОКА Пятнадцать'); break;
    }
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
    function addition  (a,b) {
        return (a + b);
    }
    function subtraction (a , b) {
        return (a - b);
    }
    function multiplication (a ,b) {
        return (a * b);
    }
    function division (a , b) {
        return ( a / b);
    }
//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
    let arg1 = +prompt ('Введите А')
    let arg2 = +prompt ('Введите В')
    let operation = prompt ('На английском sulableat : ')
    console.log (mathOperation (arg1,arg2,operation));

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case 'addition': return(addition(arg1,arg2));
            case 'subtraction': return(subtraction(arg1,arg2));
            case 'multiplication': return(multiplication(arg1,arg2));
            case 'division' : return(division(arg1,arg2));
        }
    }

    /* 7 Разнице межлу 0 и Null прекрасно всегдаа описывает эта картинка - https://www.sfdc99.com/wp-content/uploads/2019/03/Zero-vs-Null.jpg
    Null это отсутствие занчения.
    0 это значение.


     */

//8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
    console.log (power(3,3));
    function power(val, pow) {
        if (pow == 1) {
            return val;
        }
        return power(val * val, pow-1);
    }

    // я сломался. Ни как не пойму как значение val определить как константу. Иначе это ни как не степень.