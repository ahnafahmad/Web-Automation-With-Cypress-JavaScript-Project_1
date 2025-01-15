import {
    data
} from "../e2e/data";
import {
    elements
} from "../e2e/elements";

export function signUp(firstName, lastName, email, password, confirmPassword) {

    cy.contains(elements.link, data.createAnAccount).click();

    cy.get(elements.firstName).type(firstName)
    cy.get(elements.lastName).type(lastName)
    cy.get(elements.emailForSignIn).type(email)
    cy.get(elements.passwordForSignIn).type(password)
    cy.get(elements.confirmPassword).type(confirmPassword)

    cy.get(elements.createAnAccount).click()

}

export function login(email, password) {
    cy.contains(elements.link, data.signIn).click();
    cy.get(elements.emailForLogIn).type(email)
    cy.get(elements.passwordForLogIn).type(password)
    cy.get(elements.loginButton).click()
}

export const generateRandomNumber = (digits) => {
    const minimumNumber = Math.pow(10, digits - 1);
    const maximumNumber = Math.pow(10, digits) - 1;
    return Math.floor(minimumNumber + Math.random() * (maximumNumber - minimumNumber + 1));
}