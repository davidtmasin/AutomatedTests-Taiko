const {
  openBrowser,
  goto,
  click,
  write,
  focus,
  screenshot,
  closeBrowser
} = require('taiko')
const assert = require('assert').strict;

(async () => {
  try {
    console.log('Funcionalidade: Excluir tarefa')
    console.log('-----------------------------------------------')
    console.log('Cenário 02: Criar várias tarefas e depois excluí-las')
    console.log('-----------------------------------------------')
    console.log('DADO que estou no app To Do')

    await openBrowser()
    await goto('https://react-todo-six-blond.vercel.app/')
    assert.ok(await $(`//a[text()='My Todos']`).exists())
    await screenshot(
      { path: '../screenshots/delete/Cenario 02 - 01.png' },
      { path: 'screenshot' },
      { fullPage: true }
    )

    console.log('-----------------------------------------------')
    console.log('E várias tarefas foram criadas')

    for (i = 1; i <= 5; i++) {
      await click($(`//span[@class='uk-icon']`))
      assert.ok(await $(`//h4[text()='Nova tarefa']`))
      await focus(into(textBox('Nova tarefa...')))
      await write('Escrevendo uma tarefa ' + i, into(textBox('Nova tarefa...')))
      await click($(`//button[text()='Salvar']`))
      await screenshot(
        { path: '../screenshots/delete/Cenario 02 - 02_'+i+'.png' },
        { path: 'screenshot' },
        { fullPage: true }
      )

    }

    console.log('-----------------------------------------------')
    console.log('QUANDO clicar no ícone da lixeira de cada tarefa')

    for (i = 1; i <= 5; i++) {       
      await click($(`//button[@class='uk-icon-button uk-button-danger uk-icon']`))
      await screenshot(
        { path: '../screenshots/delete/Cenario 02 - 03_'+i+'.png' },
        { path: 'screenshot' },
        { fullPage: true }
      )

    }

    console.log('-----------------------------------------------')
    console.log('ENTÃO todas as tarefas terão sido removidas da listagem')

    assert.ok(!(await $(`//*[@id="root"]/div/div[2]/table/tbody/tr`).exists()))
    await screenshot(
      { path: '../screenshots/delete/Cenario 02 - 04.png' },
      { fullPage: true }
    )

  } catch (error) {
    console.error(error)
  } finally {
    closeBrowser()
  }
})()
