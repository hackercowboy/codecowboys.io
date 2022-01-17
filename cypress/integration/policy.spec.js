describe('Privacy Policy', () => {
  it('should show privacy policy in englisch', () => {
    cy.visit('/en/privacy');
    cy.get('h1').should('contain', 'Privacy Policy');
  });

  it('should show privacy policy in german', () => {
    cy.visit('/de/datenschutz');
    cy.get('h1').should('contain', 'Datenschutzerklärung');
  });
});
