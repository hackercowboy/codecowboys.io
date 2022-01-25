describe('Language', () => {
  it('should redirect to the englisch version', () => {
    cy.visit({
      url: '/',
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    cy.get('h1').should('contain', 'Letter');
  });

  it('should redirect to the german version', () => {
    cy.visit({
      url: '/',
      method: 'GET',
      headers: {
        'Accept-Language': 'de',
      },
    });

    cy.get('h1').should('contain', 'Briefe');
  });

  it('should navigate to the german version', () => {
    cy.visit({
      url: '/',
      method: 'GET',
      headers: {
        'Accept-Language': 'en',
      },
    });

    cy.get('h1').should('contain', 'Letter');

    cy.get('#navigation-item-contact').click();
    cy.wait(500);
    cy.scrollTo('bottom');
    cy.get('#language-switch-de').click();
    cy.get('h1').should('contain', 'Briefe');
  });

  it('should navigate to the englisch version of the imprint', () => {
    cy.visit({
      url: '/',
      method: 'GET',
      headers: {
        'Accept-Language': 'en',
      },
    });

    cy.get('h1').should('contain', 'Letter');

    cy.get('#navigation-item-contact').click();
    cy.wait(500);
    cy.scrollTo('bottom');
    cy.get('#imprint-link', { timeout: 10000 }).click();
    cy.get('h1').should('contain', 'Imprint');
  });

  it('should navigate to the german version of the imprint', () => {
    cy.visit({
      url: '/',
      method: 'GET',
      headers: {
        'Accept-Language': 'de',
      },
    });

    cy.get('h1').should('contain', 'Briefe');

    cy.get('#navigation-item-contact').click();
    cy.wait(500);
    cy.scrollTo('bottom');
    cy.get('#imprint-link', { timeout: 10000 }).click();
    cy.get('h1').should('contain', 'Impressum');
  });
});
