const apikey = Cypress.env('trello_api_key');
const apiToken = Cypress.env('trello_api_token');


Cypress.Commands.add('createBoard', (boardName) => {
    cy.request({
        method: 'POST',
        url: '/1/boards/',
        qs: {
            key: apikey,
            token: apiToken,
            name: boardName,
            defaultLists: true
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});

Cypress.Commands.add('createCard', (listId, cardName) => {
    cy.request({
        method: 'POST',
        url: '/1/cards',
        qs: {
            key: apikey,
            token: apiToken,
            idList: listId,
            name: cardName
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});

Cypress.Commands.add('deleteCard', (cardId) => {
    cy.request({
        method: 'DELETE',
        url: `/1/cards/${cardId}`,
        qs: {
            key: apikey,
            token: apiToken
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
});

Cypress.Commands.add('deleteBoard', (boardId) => {
    cy.request({
        method: 'DELETE',
        url: `/1/boards/${boardId}`,
        qs: {
            key: apikey,
            token: apiToken
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
});


Cypress.Commands.add('getListsOnBoard', (boardId) => {
    cy.request({
        method: 'GET',
        url: `/1/boards/${boardId}/lists`,
        qs: {
            key: apikey,
            token: apiToken
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body');
});