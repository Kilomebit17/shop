const fordCar = 'Mersedess'
const anotherCar = 'BMW'
let car = [fordCar,2,14] //Запхали в массив переменную fordCar
car[car.length] = anotherCar // продлили массив командой [car.length]

// Циклы 
for (let cars of car) { // изменили название переменной командой for (пишем переменною которою ми хотим сосдать "let cars" дальше от какой переменной будет взят масив of и названние переменно car) {}
    console.log(cars) // дальше выводим в консоль ту переменную которою мы сосдали в for (let cars of car)
}
const person = new Object ({
    height:180 + 'cm',
    firstName: 'Vladilen',
    lastName: 'Lamaiev',
    languages:['ru,end,ua'],
    isHasGirl:false
})
if (person.isHasGirl === false) {
    console.log('Да так и есть!')
}else {
    console.log('Это не прада друг:)')
}
person.isHasGirl = true
person.isShitWritter = false
console.log(person)
console.log(Math.pow(5,4))

const card = 5168757399933706
if (card === 5168757399933706) {
    console.log('Даннi введенно Правильно')
}else {
    console.log('Даннi введенно не правильно')
}