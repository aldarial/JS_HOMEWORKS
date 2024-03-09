'use strict'

const year = +prompt('У якому році ви народилися?');
const city =  prompt('У якому місті ви живете?');
const favSport = prompt('Який ваш улюбленний вид спорту?');

const age = 2024 - year;

let answer = '';
if (age) {
    answer = answer.concat(`Ваш вік:` + age + '.');
    if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
    let country;
    switch (city){
        case 'Київ':
            country = 'Україна';
            break;
        case "Вашингтон":
            country = 'США';
            break;
        case "Лондон":
            country = 'Велика Британія';
            break;
    }
    answer = answer.concat('Ви живете у столиці ' + country + '.');
    } else {
        answer = answer.concat('Ви живете у місті ' + city + '.');
    }
    answer = answer.concat('Ваш улюблений вид спорту: ' + favSport + '.');
} else {
    answer = answer.concat('Шкода, що ви не захотіли ввести свій рік народження.')
}


const sports = {
    'футбол': 'Ліонель Мессі',
    'бокс': 'Александр Усик',
    'плавання': 'Майкл Фелпс'
};

if (favSport && sports[favSport.toLowerCase()]){
    answer = answer.concat('Круто! Хочете стати ' + sports[favSport.toLowerCase()] + '?');
} else if (!favSport) {
    answer = answer.concat('Шкода, що ви не захотіли ввести свій улюблений вид спорту.');
} else {
    answer = answer.concat(`Такого виду спорту я не знаю.`);
}

alert(answer);