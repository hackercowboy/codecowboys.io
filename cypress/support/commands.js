Cypress.Commands.add('isInViewport', { prevSubject: true }, (element) => {
  cy.get(element)
    .then(($el) => {
      cy.window().then((window) => {
        const { documentElement } = window.document;
        const bottom = documentElement.clientHeight;
        const rect = $el[0].getBoundingClientRect();
        expect(rect.top).not.to.be.greaterThan(bottom);
      });
    });
});

Cypress.Commands.add('isNotInViewport', { prevSubject: true }, (element) => {
  cy.get(element)
    .then(($el) => {
      cy.window().then((window) => {
        const { documentElement } = window.document;
        const bottom = documentElement.clientHeight;
        const rect = $el[0].getBoundingClientRect();
        expect(rect.top).to.be.greaterThan(bottom);
      });
    });
});
