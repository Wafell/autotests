// Создать функцию deferred, которая принимает выражение и callback. Если выражение true, то callback выполняется сразу иначе через 1сек
let expression: boolean = (1 < 2);
function deferred(expression: boolean, callback: any) {
    if (expression) {
        callback(expression);
    } else {
        setTimeout(callback, 1000, expression);
    }
}

function expressionValue(expression: boolean) {
    console.log(`expression = ${expression}`)
}
deferred(expression, expressionValue)