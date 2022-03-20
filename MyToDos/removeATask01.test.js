const {
  openBrowser,
  goto,
  click,
  write,
  focus,
  screenshot,
  closeBrowser
} = require('taiko')
const assert = require('assert').strict

  (async () => { 

    try {

      console.log('Funcionalidade: Excluir tarefa')
      console.log('-----------------------------------------------')
      console.log('Criar uma tarefa e depois excluí-la')
      console.log('-----------------------------------------------')
      console.log('DADO que estou no app To Do')

      openBrowser()
      await goto('https://react-todo-six-blond.vercel.app/')
      assert.ok(await $(`//a[text()='My Todos']`).exists())
      await screenshot(
        { path: './screenshots/delete/Cenario 01 - 01.png' },
        { path: 'screenshot' },
        { fullPage: true }
      )
      
    } catch (error) {

      console.error(error);
      
    } finally {
      closeBrowser()
    }

  })();
