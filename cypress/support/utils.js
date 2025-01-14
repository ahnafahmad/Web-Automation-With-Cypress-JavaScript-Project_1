export function signUp(firstName, lastName, email, password, confirmPassword) {

    cy.contains('a', 'Create an Account').click();

    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(confirmPassword)

    cy.get('[title="Create an Account"]').click()

}

export function login(email, password) {
    cy.contains('a', 'Sign In').click();
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('#send2').click()
}

export const generateRandomNumber = (digits) => {
    const minimumNumber = Math.pow(10, digits - 1);
    const maximumNumber = Math.pow(10, digits) - 1;
    return Math.floor(minimumNumber + Math.random() * (maximumNumber - minimumNumber + 1));
}