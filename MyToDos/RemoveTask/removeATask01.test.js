const {
  openBrowser,
  goto,
  click,
  write,
  focus,
  screenshot,
  closeBrowser,
  $
} = require('taiko')
const assert = require('assert').strict;

(async () => {
  try {
    console.log('Funcionalidade: Excluir tarefa')
    console.log('-----------------------------------------------')
    console.log('Criar uma tarefa e depois excluí-la')
    console.log('-----------------------------------------------')
    console.log('DADO que estou no app To Do')

    await openBrowser()
    await goto('https://react-todo-six-blond.vercel.app/')
    assert.ok(await $(`//a[text()='My Todos']`).exists())
    await screenshot(
      { path: '../screenshots/delete/Cenario 01 - 01.png' },
      { path: 'screenshot' },
      { fullPage: true }
    )

    console.log('-----------------------------------------------')
    console.log('E uma tarefa foi criada')

    await click($(`//span[@class='uk-icon']`))
    assert.ok(await $(`//h4[text()='Nova tarefa']`))
    await screenshot(
      { path: '../screenshots/delete/Cenario 01 - 02.png' },
      { fullPage: true }
    )

    await focus(into(textBox('Nova tarefa...')))
    await write('Escrevendo uma tarefa', into(textBox('Nova tarefa...')))
    await screenshot(
      { path: '../screenshots/delete/Cenario 01 - 03.png' },
      { fullPage: true }
    )

    await click($(`//button[text()='Salvar']`))
    await screenshot(
      { path: '../screenshots/delete/Cenario 01 - 04.png' },
      { fullPage: true }
    )

    console.log('-----------------------------------------------')
    console.log('QUANDO clicar no ícone da lixeira')

    await click($(`//button[@class='uk-icon-button uk-button-danger uk-icon']`))
    
    console.log('-----------------------------------------------')
    console.log('ENTÃO a tarefa terá sido removida da listagem')

    assert.ok(!(await $(`//*[@id="root"]/div/div[2]/table/tbody/tr`).exists()))
    await screenshot(
      { path: '../screenshots/delete/Cenario 01 - 05.png' },
      { fullPage: true }
    )
  } catch (error) {
    console.error(error)
  } finally {
    closeBrowser()
  }
})()
