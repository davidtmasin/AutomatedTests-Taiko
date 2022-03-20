const { openBrowser, goto, click, write, focus, screenshot, closeBrowser } = require('taiko')
const assert = require('assert').strict;

(async () => {
  try {
    console.log('Funcionalidade: Criar tarefa')
    console.log('-----------------------------------------------')
    console.log('Cenário 01: Criar uma tarefa informando um nome')
    console.log('-----------------------------------------------')
    console.log('DADO que estou no app To Do')

    await openBrowser()
    await resizeWindow({ width: 1920  , height: 1080 })
    await goto('https://react-todo-six-blond.vercel.app/')
    assert.ok(await $(`//a[text()='My Todos']`).exists())
    await screenshot(
      { path: './screenshots/create/Cenario 01 - 01.png' },
      { path: 'screenshot' },
      { fullPage: true }
    )
    
    console.log('-----------------------------------------------')
    console.log('QUANDO clicar no ícone de adicionar tarefa (+)')

    await click($(`//span[@class='uk-icon']`))
    assert.ok(await $(`//h4[text()='Nova tarefa']`))
    await screenshot(
      { path: './screenshots/create/Cenario 01 - 02.png' },
      { fullPage: true }
    )
    
    console.log('-----------------------------------------------')
    console.log('E preencher um nome para a tarefa')

    await focus(into(textBox('Nova tarefa...')))
    await write("Escrevendo uma tarefa", into(textBox('Nova tarefa...')))
    await screenshot(
      { path: './screenshots/create/Cenario 01 - 03.png' },
      { fullPage: true }
    )
    
    console.log('-----------------------------------------------')
    console.log('E finalizar a ação no botão SALVAR')

    await click($(`//button[text()='Salvar']`))
    
    console.log('-----------------------------------------------')
    console.log('ENTÃO a tarefa cadastrada estará visível na lista')

    assert.ok(await $(`//td[text()='Escrevendo uma tarefa']`).exists())
    await screenshot(
      { path: './screenshots/create/Cenario 01 - 04.png' },
      { fullPage: true }
    )

  } catch (error) {
    console.error(error)
  } finally {
    closeBrowser();
  }
})()
