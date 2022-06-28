// Создать интервальный таймер, который выводит секунды с момента старта
{
    let countSecond: number = 0;
    let myTimer = setInterval(intervalTimer, 1000);
    // таймер до 10 секунд
    function intervalTimer() {
        countSecond++;
        if (countSecond > 10) {    
            clearInterval(myTimer);
        } else {
            console.log(countSecond);
        }
        
    }
}