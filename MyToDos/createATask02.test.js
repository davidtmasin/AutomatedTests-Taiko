const { openBrowser, goto, click, write, focus, screenshot, closeBrowser } = require('taiko')
const assert = require('assert').strict;

(async () => {
  try {
    console.log('Cenário 02: Criar uma tarefa sem informar um nome')
    console.log('-----------------------------------------------');
    console.log('DADO que estou no app To Do')

    await openBrowser()
    await resizeWindow({ width: 1920  , height: 1080 })
    await goto('https://react-todo-six-blond.vercel.app/')
    assert.ok(await $(`//a[text()='My Todos']`).exists())
    await screenshot({path: './screenshots/Cenario 02 - 01.png'}, {path: 'screenshot'}, { fullPage: true })
    
    console.log('-----------------------------------------------')
    console.log('QUANDO clicar no ícone de adicionar tarefa (+)')

    await click($(`//span[@class='uk-icon']`))
    assert.ok(await $(`//h4[text()='Nova tarefa']`))
    await screenshot({path: './screenshots/Cenario 02 - 02.png'}, { fullPage: true }) 
    
    console.log('-----------------------------------------------')
    console.log('E depois clicar no botão SALVAR')

    await click($(`//button[text()='Salvar']`))
    
    console.log('-----------------------------------------------')
    console.log('ENTÃO a mensagem "Tarefa inválida" será apresentada')

    assert.ok(await $(`//strong[text()='Tarefa inválida']`).exists())
    await screenshot({path: './screenshots/Cenario 02 - 03.png'}, { fullPage: true })

  } catch (error) {
    console.error(error)
  } finally {
    closeBrowser();
  }
})()
