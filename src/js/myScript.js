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


//Анимация чисел 
var show = true;
    var countbox = ".statistika";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.statistika_numbers').css('opacity', '1');
            $('.statistika_numbers').spincrement({
                thousandSeparator: "",
                duration: 4000
            });
             
            show = false;
        }
    });


//Активные пункты меню при прокрутке страницы
var positions = [], //сюда сложим на загрузке страницы позиции наших "якорных" блоков, чтобы не считать их каждый раз. и сюда же положим ссылки на соответствующие a.scroll-to
    currentActive = null, //здесь будет храниться id текущего блока, чтобы не менять классы по 100 раз за одну прокрутку 
    links = $('.scroll-to'); //сохраним массив всех a.scroll-to

$(".anchor").each(function(){ //перебираем блоки, сохраняем позиции и ссылки на пункты меню
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

//делаем реверс массива, чтобы при скролле перебирать его с конца и выходить из цикла при нахождении
//зачем нам проверять каждый блок, если прокрутка уже ниже последнего, верно?
positions = positions.reverse(); 

$(window).on('scroll',function() {
    var winTop = $(window).scrollTop();
    for(var i = 0; i < positions.length; i++){
        if(positions[i].top < winTop){ //если прокрутка страницы ниже нашего блока
            if(currentActive !== i){ //и если мы еще не добавили класс текущему блоку
                currentActive = i;
                links.filter('.active').removeClass('active'); //снимаем класс .active с текущего пункта меню
                positions[i].a.addClass("active");
            }
            break; //выходим из цикла, не нужно проверять блоки, которые выше
        }
    }
});


//Калькулятор расчета стоимости
$("select").change(function () {
    calculate();
});


function calculate() {
    var sum = 0;

    $("select[name='adaptivnost'], select[name='design']").each(function () {

        sum += isNaN(this.value) || $.trim(this.value) === '' ? 0 : parseFloat(this.value);

    });

    var a = parseInt($("#type_site").val(), 10);

    var total = a + sum;

    var total_sroki = total / 1500;

    $("#total").html(total.toFixed(2));
    $("#total_sroki").html(total_sroki.toFixed());
}


//Жмякаешь на img она на весь экран открывается
$('.test-popup-link').magnificPopup({
  type: 'image'
  // other options
});


//wow
new WOW().init();


//проверка полей
$('form').submit(function(event){
  if($("#inputName").val() == "" || $("#inputEmail").val() == ""){
    event.preventDefault();
    alert("Введите корректные данные");
  }
})


});


