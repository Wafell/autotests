// Выполнить xpath
// 1 - выбрать элемент формы по классу form
// 2 - выбрать элемент с id равным loginField внутри формы
// 3 - выбрать элемент с id равным passwordField внутри формы
// var assert = require('assert');

// describe('Test Suite 1', function() {
//     it('Test 1', function() {
//         assert.ok(true, "This shouldn't fail");
//     })

//     it('Test 2', function() {
//         assert.ok(1 === 1, "This shouldn't fail");
//         // assert.ok(false, "This should fail");
//     })
// })

describe('Selectors ', () => {

    it('Example 1 Xpath', async () => {
        await browser.url('https://testspace.orange.local.learn.ispringdev.com/login')
        const form = await $('//*[@class="form"]')
        const loginField = await form.$('//*[@id="loginField"]')
        const passwordField = await form.$('//*[@id="passwordField"]')
        console.log(form)
        console.log(loginField)
        console.log(passwordField)    
    })

})    