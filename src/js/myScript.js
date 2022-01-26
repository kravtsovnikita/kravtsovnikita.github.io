"use strict"
$(document).ready(function(){

/* var tip = prompt('1 - Cайт - визитка   2 - Корпоративный сайт   3 - Интернет - магазин');
if (parseInt(tip) > 3){console.log('Введите корректные данные!')}
else if(parseInt(tip) < 1){console.log('Введите корректные данные!')}
else{console.log(tip)}
 
var design = prompt('1 - Простой дизайн   2 - Заказной дизайн');
if (parseInt(design) > 2){console.log('Введите корректные данные!')}
else if(parseInt(design) < 1){console.log('Введите корректные данные!')}
else{console.log(design)}

var adaptivnost = prompt('1 - Только для ПК   2 - Только для Мобильных устройств   3 - Всё включено');
if (parseInt(adaptivnost) > 3){console.log('Введите корректные данные!')}
else if(parseInt(adaptivnost) < 1){console.log('Введите корректные данные!')}
else{console.log(adaptivnost)}


if(tip && design && adaptivnost == true){
    var price = parseInt(tip) + parseInt(design) + parseInt(adaptivnost) + '$';
    alert(price);
}
else{
	alert('Введите корректные данные!');
}


function calculate(num1) {
    return function operation(oper) {
      
        return function number2(num2) {
            var result = 0;
          
          switch (oper) {
            case "+": 
              result = num1+num2;
              break;
            case "-": 
              result = num1-num2;
              break;
            case "*": 
              result = num1*num2;
              break;  
            case "/": 
              result = num1/num2;
              break;
            default: 
              return console.log ('Function suports only "+", "-", "/", "*" opearations');   
          }
          if (isNaN(num1) || isNaN(num2)) {
            return console.log("Enter numbers correctly!");
          }
          
          return console.log(result);
        }
        }; 
    };*/

// Анимация чисел
function outNum(){
    $('.statistika_numbers').spincrement({
        thousandSeparator: "",
        duration: 5000
    });
}

let options = {threeshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.statistika_numbers');
    elements.each((i,el) => {
    	observer.observe(el);
    });

function onEntry (entry){
	entry.forEach(change => {
		if(change.isIntersecting){
			outNum();
		}
	});
}


// Якорные ссылки





});


