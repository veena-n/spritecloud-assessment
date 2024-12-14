import { users } from "../support/users";
import { color, colors} from "../support/color";

describe('validate the login page', () => {
    beforeEach (() => {

        cy.visit('/')
        cy.url().should('include', 'saucedemo')
      })
    
it('Verify the login page of sauce demo application', () => {
const appName = users.logotitle;
    cy.get('.login_logo')
    .should('have.css', 'color', colors.Black)
    .and('have.text', appName.title)

    cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username')
    cy.get('[data-test="password"').should('have.attr', 'placeholder', 'Password')

    cy.get('[data-test="login-button"]')
    .should('have.css', 'color', colors.Black)
    .and('have.css', 'background-color', colors.Green)
})

it('Validate user can successfully login to the application using validuser', () => {
    const validUser = users.standard_user;

    cy.get('[data-test="username"]').type(validUser.username)
    cy.get('[data-test="password"]').type(validUser.password)
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', validUser.expectedUrl)
    cy.get('.title').should('have.text', validUser.expectedTitle)

})


it('Validate user can successfully login to the application using invaliduser', () => {
    const invalidUser = users.invalid_user;

    cy.get('[data-test="username"]').type(invalidUser.username)
    cy.get('[data-test="password"]').type(invalidUser.password)
    cy.get('[data-test="login-button"]').click()


    cy.url().should('include', invalidUser.expectedUrl)
    cy.get('.error-message-container').should('be.visible')
    .and('contain.text', invalidUser.expectedTitle)
    .and('have.css', 'background-color',colors.Red)

})

it('Validate the error message for locked user', () =>{
    const lockedOutUser = users.locked_out_user;

    cy.get('[data-test="username"]').type(lockedOutUser.username)
    cy.get('[data-test="password"]').type(lockedOutUser.password)
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', lockedOutUser.expectedUrl)
    cy.get('.error-message-container').should('be.visible')
      .and('contain.text', lockedOutUser.expectedTitle)
      .and('have.css', 'background-color',colors.Red)

  })

// verify the error message when a user tries to log in without entering a password
  it('Verify that user can remove the error message', () => {
    const errMsg = users.password_error

    cy.get('[data-test="username"]').type(errMsg.username)
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', errMsg.expectedUrl)
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', errMsg.expectedTitle)
      .and('have.css', 'color',colors.White)

    cy.get('.error-button').click()
    
  })

})
