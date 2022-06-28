// Добавить в объект функцию toString, которая выводит имя и возраст
{
    const user = {
        name: "UserName",
        age: 18,
        toString: function() {
            console.log(`${user.name}, ${user.age}`)
        }
    }
    user.toString()
}
