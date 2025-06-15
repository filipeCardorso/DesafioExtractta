describe('Fluxo de trabalho da API do Trello', () => {
  it('deve criar um board, um card, e depois limpar o ambiente', () => {

    const boardName = `Board de Teste - ${Date.now()}`;
    const cardName = 'Card de Teste';

    //Passo 1: Cadastrar um board
    cy.createBoard(boardName).then((board) => {
      cy.log(`Board criado: ${board.name}`);

      //Passo 2: Listar o board recém-criado
      cy.getListsOnBoard(board.id).then((lists) => {
        const listId = lists[0].id;
        cy.log(`Lista encontrada ${listId}`);

        //Passo 3: Criar um card na lista encontrada
        cy.createCard(listId, cardName).then((card) => {
          cy.log(`Card criado: ${card.name}`);

          //Passo 4: Excluir um card
          cy.deleteCard(card.id).then(() => {
            cy.log(`Card excluído: ${card.name}`);

            //Passo 5: Excluir um board
            cy.deleteBoard(board.id).then(()=>{
              cy.log(`Board excluido: ${board.name}`)
            });
          });
        });
      });
    });
  });
});