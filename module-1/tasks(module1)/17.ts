// Создать функцию для генерации селектора для выбора элементов по data-at="id=header". сигнатура (id: string) => string,
// Пример foo('header') вернет [data-at*="id=header"]
// Прочитать что такое селектор
{
    function generSelector(id: string) {
        return `data-at*="id=${id}"`    
    }
    console.log(generSelector('header'))
}