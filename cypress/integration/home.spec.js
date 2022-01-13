describe('Home', () => {
  beforeEach(() => {
    cy.visit('/en');
  });

  it('should scroll to apps when clicking on the apps navigation', () => {
    cy.get('#apps h2').isNotInViewport();
    cy.get('#navigation-item-apps').click();
    cy.wait(2000);
    cy.get('#apps h2').isInViewport();
  });

  it('should scroll to about when clicking on the apps navigation', () => {
    cy.get('#about h2').isNotInViewport();
    cy.get('#navigation-item-about').click();
    cy.wait(2000);
    cy.get('#about h2').isInViewport();
  });

  it('should scroll to contact when clicking on the contact navigation', () => {
    cy.get('#contact h2').isNotInViewport();
    cy.get('#navigation-item-contact').click();
    cy.wait(2000);
    cy.get('#contact h2').isInViewport();
  });

  it('should accept cookie consent', () => {
    cy.get('.CookieConsent').should('be.visible');
    cy.get('#rcc-confirm-button').click();
    cy.get('.CookieConsent').should('not.exist');
  });

  it('should send contact message', () => {
    cy.intercept('POST', '/api/contact', { statusCode: 200 }).as('contact');
    cy.get('#navigation-item-contact').click();
    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=subject]').type('Test Subject');
    cy.get('textarea[name=message]').type('Test Message');
    cy.get('input[name=privacy]').click();
    cy.get('#contact-form-button').click();

    cy.wait('@contact').then((xhr) => {
      const {
        email, subject, message, privacy,
      } = xhr.request.body;
      expect({
        email, subject, message, privacy,
      }).to.deep.equal({
        email: 'test@example.com', subject: 'TestSubject', message: 'TestMessage', privacy: true,
      });

      cy.get('.contact-form-success').should('be.visible');
    });
  });

  it('should send contact message and handle error', () => {
    cy.intercept('POST', '/api/contact', { statusCode: 400 }).as('contact');
    cy.get('#navigation-item-contact').click();
    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=subject]').type('Test Subject');
    cy.get('textarea[name=message]').type('Test Message');
    cy.get('input[name=privacy]').click();
    cy.get('#contact-form-button').click();

    cy.wait('@contact').then(() => {
      cy.get('.contact-form-error').should('be.visible');
    });
  });
});
