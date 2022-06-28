// Создать класс Calculator имеет 4 метода (add, sub, mul, div и getValue). Конструктор принимает опциональное начальное значение
// Объект должен поддерживать chain
// Пример (new Calculator()).add(5).sub(4).mul(6).div(2).getValue() // 3
class Calculator {
    value;
    constructor(value = 0) {
        this.value = value
    }

    add(num: number) {
        this.value = this.value + num
        return this
    }
    sub(num: number) {
        this.value = this.value - num
        return this
    }
    mul(num: number) {
        this.value = this.value * num
        return this
    }
    div(num: number) {
        this.value = this.value / num
        return this
    }
    getValue() {
        return this.value
    }
}

const calc1 = new Calculator(3)
console.log(calc1.add(5).sub(4).mul(6).div(2).getValue())