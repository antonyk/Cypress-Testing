describe("Signup", () => {

  const SIGNUP_NAME = 'John Smith';
  const SIGNUP_EMAIL = 'john@gmail.fake';
  const SIGNUP_PASS = 'secretpass';

  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
    cy.get(`input[name="name"]`).as('nameInput');
    cy.get(`input[name="email"]`).as('emailInput');
    cy.get(`input[name="password"]`).as('passwordInput');
    cy.get(`input[name="isTermsOn"]`).as('termsCheckbox');
  });

  it('fills out and submits form', () => {
    cy.get('@nameInput')
      .type(SIGNUP_NAME)
      .should('have.value', SIGNUP_NAME);

    cy.get('@emailInput')
      .type(SIGNUP_EMAIL)
      .should('have.value', SIGNUP_EMAIL);

    cy.get('@passwordInput')
      .type(SIGNUP_PASS)
      .should('have.value', SIGNUP_PASS);

    cy.get('@termsCheckbox')
      .check()
      .should('be.checked');

    cy.get('button').click()
  });


  // cy.get(`input[id='name']`).should("have.length", 1);


});