// Создать класс SearchEnginePage, который наследуется от Page(из предыдущей задачи) и реализует новый метод search(text) - который выводит "поиск по <NAME>: <text>"
import { Page } from "./04";
class SearchEnginePage extends Page {
    text: string;
    constructor(name: string, url: string, text: string) {
        super(name, url);
        this.text = text;
    }
    search(){
        console.log(`Поиск по ${this.name}: ${this.text}`)
    }
}

const page1 = new SearchEnginePage('Google', 'https://www.google.ru', 'Text for page1')
page1.open()
page1.search()