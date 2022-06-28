// Подсчитать средний возраст группы
function avgAge(group) {
    let avg = 0
    let count = 0
    for (let key in group) {
        count ++
        avg = avg + group[key]
    }
     
    return (avg/count)
}

const group = {
    Jek: 18,
    Peeter: 20,
    Anna: 27
}
console.log(avgAge(group)); //21.666666