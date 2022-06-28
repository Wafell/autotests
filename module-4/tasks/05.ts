// используя timeout написать функцию которая выводит секунды с момента старта. Использовать async/await
{
    function timer() {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    }
    
    async function printSec(num: number) {
        console.log(num)
        return await timer()
    }

    async function run() {
        for (let i = 0; i <= 10; i++) {
            const userId = await printSec(i);
        }
    }
    
    run()
}