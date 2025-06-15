# Projeto de Automação de Testes de API para o Trello

Este projeto contém uma suíte de testes automatizados para a API da plataforma Trello. O objetivo é validar as principais operações de CRUD (Create, Read, Update, Delete) para as entidades `Boards` e `Cards`, garantindo a integridade e o correto funcionamento dos endpoints.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o JavaScript.
* **Cypress**: Framework principal de automação de testes.
* **Mochawesome**: Biblioteca para geração de relatórios de teste em HTML.

## ✅ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

* [Node.js](https://nodejs.org/en/) (versão 16 ou superior).
* [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js).
* Uma conta ativa na plataforma [Trello](https://trello.com/).

## ⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar o projeto em sua máquina local.

**1. Instale as dependências:**
Execute o comando abaixo para instalar o Cypress e outras dependências listadas no `package.json`.
```bash
npm install
```

**2. Configure suas credenciais do Trello:**
Para interagir com a API do Trello, você precisará de uma **Chave de API (API Key)** e um **Token**.

   * Acesse **[https://trello.com/app-key](https://trello.com/app-key)**.
   * Copie a sua **"Chave de API"**.
   * Na mesma página, clique no link de texto **"token"** para gerar seu token de acesso pessoal.

**3. Crie o arquivo de ambiente:**
Na raiz do projeto, crie um arquivo chamado `cypress.env.json` e adicione suas credenciais, como no exemplo abaixo:
```json
{
  "trello_api_key": "SUA_CHAVE_DE_API_AQUI",
  "trello_api_token": "SEU_TOKEN_GERADO_AQUI"
}
```
> **Importante:** O arquivo `cypress.env.json` está listado no `.gitignore`, portanto, suas credenciais nunca serão enviadas para o repositório.

## ⚡ Executando os Testes

Você pode executar os testes de duas maneiras:

#### Modo Interativo (com interface gráfica)
Ideal para desenvolver e depurar os testes.
```bash
npx cypress open
```

#### Modo Headless (em terminal)
Ideal para execução em esteiras de CI/CD e para gerar os relatórios.
```bash
npx cypress run
```

## 📊 Visualizando os Relatórios

Após executar os testes no modo **headless** (`npx cypress run`), o relatório HTML do Mochawesome será gerado na seguinte pasta:
```
cypress/reports/html/
```
Abra o arquivo `index.html` em seu navegador para visualizar um dashboard interativo com os resultados dos testes.

## 📂 Estrutura do Projeto

```
/cypress
|
├── /e2e/               # Contém os arquivos de teste (.cy.js)
├── /reports/           # Onde os relatórios são gerados
├── /support/
|   └── commands.js     # Arquivo para comandos customizados do Cypress
|
├── cypress.config.js   # Arquivo principal de configuração do Cypress
└── cypress.env.json    # Arquivo para dados sensíveis (não versionado)
```
