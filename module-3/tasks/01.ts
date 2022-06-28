// Написать функцию sum для суммирования всех переданных аргументов
{
    function sumAllArgs(...args) {
        return args.reduce((sum, arg) => sum + arg)
    }

    console.log(sumAllArgs(1, 2, 3, 4, 5))
}