describe('Imprint', () => {
  it('should show imprint in englisch', () => {
    cy.visit('/en/imprint');
    cy.get('h1').should('contain', 'Imprint');
  });

  it('should show imprint in german', () => {
    cy.visit('/de/impressum');
    cy.get('h1').should('contain', 'Impressum');
  });
});
