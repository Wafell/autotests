// Доработать таблицы истинности. Сделать вывод через for. Не использовать массивы!!!
{
    console.log(`a\tb\ta&&b\ta||b\t!a`)
    for (let i = 0; i < 4; i++) {
        let a = (i % 2) === 0
        let b = (i / 2) === 0 || i === 3
        console.log(`${a}\t${b}\t${a && b}\t${a || b}\t${!a}`)
    }
}