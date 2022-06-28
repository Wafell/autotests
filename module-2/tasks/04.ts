// вывести матрицу
{
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    for (let index of matrix) {
        let str = ''
        for (let ind of index) {
            str = str + ind + ' '
        }
        console.log(str)
    }
}

