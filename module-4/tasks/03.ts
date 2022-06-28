// Создать функцию, которая возвращает промис, который резолвится через n миллисекунд.
{
    let str = '';
    function fun1(n: number) {
        let prom1 = new Promise((resolve) => {
            setTimeout(() => {
                resolve(str = `Я зарезолвился через ${n} миллисекунд`)
            }, n)
        });
        prom1
            .then(
                data => {
                    console.log(data)
                }
            )
        return prom1
    }

    fun1(1000)
}