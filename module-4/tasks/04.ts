// доработать предыдущую функцию, добавить опциональный 2-ой аргумент, через которое промис реджектится.
{
    let str = '';
    function fun2(n: number, n2: number = 1000) {
        let prom1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(str = 'Я зарезолвился ')
            }, n)
            setTimeout(() => {
                reject(str = 'Не получилось зарезолвиться')
            }, n2)   
        });
        prom1
            .then(
                data => {
                    console.log(data)
                },
                error => {
                    console.log(error)
                }    
            )
        return prom1
    }
    fun2(1000, 2000)
}