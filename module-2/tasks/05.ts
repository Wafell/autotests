// Написать функцию, которая убирает дублирование в массиве строк
{
    function uniq(arr: string[]): string[] {
        for (let i = 0; i < arr.length; i++) {
            let count = 0
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] === arr[k]) {
                    count ++
                    console.log(`${arr[k]} = ${arr[i]} ${count}`)
                    if (count > 1) {
                        arr.splice(k, 1)
                    }
                }
            }
        }
        return arr
    }

    const users = ['user1', 'user2', 'user3', 'user2']
    console.log(uniq(users)) //['user1', 'user2', 'user3']
}