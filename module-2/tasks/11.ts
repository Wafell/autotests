// Создать функцию для подсчета кол-ва свойств в объекте
{
    function count(obj) {
        let count = 0
        for (let key in obj) {
            count++
        }
        return count
    }
    
    const group = {
        Jek: '18',
        Peeter: '20',
        Anna: '27'
    }
    console.log(count(group)) // 3
    
}