// Дописать функцию для подсчета суммы нечетных чисел в массиве
{
    function summaOdd(arr: number[]): number {
        let sum = 0
        for (const index in arr) {
            if (arr[index] % 2 === 1) {
                sum = sum + arr[index]
            }
        }
        return sum
    }

    const nums = [1, 2, 3]
    console.log(summaOdd(nums)) // 4
}
