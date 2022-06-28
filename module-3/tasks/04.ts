// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле

// const page = new Page("Yandex", 'https://yandex.ru')
// page.open()

class Page {
    name: string;
    url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
    open() {
        console.log(`Переход на страницу ${this.name}: ${this.url}`)
        }    
}
    
export { Page };