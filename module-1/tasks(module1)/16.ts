// Создать функцию для генерации последовательность 1 3 5 7, сигнатура (n: Number) => string
{
    function oddNumbers(n: number) {
        let str = ''
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 1) {
                str = str + `${i} `
            }
        }
        return str
    }
   console.log(oddNumbers(15))
}