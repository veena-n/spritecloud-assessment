import { users } from "../support/users";
import { colors } from "../support/color";

describe('Validate the logout functionality', () => {

    beforeEach (() => {

        cy.visit('/')
        cy.url().should('include', 'saucedemo')
      })

      
  it('Validate that user can log out successfully', () =>{
    const validUser = users.standard_user;

    cy.get('[data-test="username"]').type(validUser.username)
    cy.get('[data-test="password"]').type(validUser.password)
    cy.get('[data-test="login-button"]').click()
    
    cy.url().should('include', validUser.expectedUrl)
    cy.get('.title').should('have.text', validUser.expectedTitle)

    cy.get('.bm-burger-button').should('be.visible').click()
    cy.get('#logout_sidebar_link').should('have.css', 'color', colors.DeepGreen).click()
    cy.url().should('include', '')
  })

})