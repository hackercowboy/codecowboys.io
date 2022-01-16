describe('Home', () => {
  beforeEach(() => {
    cy.visit('/en/letter');
  });

  it('should scroll to features when clicking on the apps navigation', () => {
    cy.get('#features h2').isNotInViewport();
    cy.get('#navigation-item-features').click();
    cy.wait(2000);
    cy.get('#features h2').isInViewport();
  });

  it('should scroll to description when clicking on the apps navigation', () => {
    cy.get('#description h2').isNotInViewport();
    cy.get('#navigation-item-description').click();
    cy.wait(2000);
    cy.get('#description h2').isInViewport();
  });

  it('should scroll to screenshots when clicking on the apps navigation', () => {
    cy.get('#screenshots h2').isNotInViewport();
    cy.get('#navigation-item-screenshots').click();
    cy.wait(2000);
    cy.get('#screenshots h2').isInViewport();
  });

  it('should scroll to description when clicking on the apps navigation', () => {
    cy.get('#contact h2').isNotInViewport();
    cy.get('#navigation-item-contact').click();
    cy.wait(2000);
    cy.get('#contact h2').isInViewport();
  });
});
