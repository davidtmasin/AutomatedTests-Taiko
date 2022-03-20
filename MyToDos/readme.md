# Cenários de Teste

Utilizaremos **Gerkhin** para detalhamento dos cenários, usando as palavras-chaves:
* **DADO** (Pré-condição)
* **QUANDO** (Ação)
* **ENTÃO** (Resultado da ação)
* **E** (Acréscimo de informação)

---

## Funcionalidade: Criar tarefa

### Cenário 01: **Criar uma tarefa informando um nome**
**DADO** que estou no app To Do

**QUANDO** clicar no ícone de adicionar tarefa (+)

**E** preencher um nome para a tarefa

**E** finalizar a ação no botão SALVAR

**ENTÃO** a tarefa cadastrada estará visível na lista

---

### Cenário 02: **Criar uma tarefa sem informar um nome**
**DADO** que estou no app To Do

**QUANDO** clicar no ícone de adicionar tarefa (+)

**E** depois clicar no botão SALVAR

**ENTÃO** a mensagem "Tarefa inválida" será apresentada

---

## Funcionalidade: Excluir tarefa

### Cenário 01: **Criar uma tarefa e depois excluí-la**
**DADO** que estou no app To Do

**E** uma tarefa foi criada

**QUANDO** clicar no ícone da lixeira

**ENTÃO** a tarefa terá sido removida da listagem

---

### Cenário 02: **Criar várias tarefa e depois excluí-las**
**DADO** que estou no app To Do

**E** várias tarefas foram criadas

**QUANDO** clicar no ícone da lixeira de cada tarefa

**ENTÃO** todas as tarefas terão sido removidas da listagem