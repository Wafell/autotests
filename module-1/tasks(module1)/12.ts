// Вывести сообщение, исходя из температуры
// до -10 - Очень Холодно
// от -10 - +10 - Холодно
// от +10 - +18 - Прохладно
// от +18 - +25 - Тепло
// от +25 и выше - Жарко
{
    const temp: number = Math.floor(Math.random() * 30) 
    console.log(`Температура: ${temp}`)
    if (temp < -10) {
        console.log('Очень холодно')
    } else if (temp >= -10 && temp < 10) {
        console.log('Холодно')
    } else if (temp >= 10 && temp < 18) {
        console.log('Прохладно')
    } else if (temp >= 18 && temp < 25) {
        console.log('Тепло')
    } else if (temp >= 25) {
        console.log('Жарко')
    }
}