describe('App E2E', () => {
  it('헤더가 있어야 한다', () => {
    cy.visit('http://localhost:3000');

    cy.get('h1')
      .should('have.text', 'hello world');
  });
});
