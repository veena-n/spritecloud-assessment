import { users } from "../support/users";
import { colors } from "../support/color";


describe('validate cart functionality', () => {
    beforeEach (() => {

        cy.visit('/')
        cy.url().should('include', 'saucedemo')
      })

      it('validate that user can add an item to the cart after successful login', () => {
        const validUser = users.standard_user;
    
        cy.get('[data-test="username"]').type(validUser.username)
        cy.get('[data-test="password"]').type(validUser.password)
        cy.get('[data-test="login-button"]').click()
    
        cy.url().should('include', validUser.expectedUrl)
        cy.get('.title').should('have.text', validUser.expectedTitle)
    
        cy.get('.inventory_item').first().contains('Add to cart')
        .should('have.css', 'color', colors.Black).click()
        cy.get('.shopping_cart_badge').should('have.text', '1')  

      })

      it('validate that user can remove added item from the cart', () => {
        const validUser = users.standard_user;
    
        cy.get('[data-test="username"]').type(validUser.username)
        cy.get('[data-test="password"]').type(validUser.password)
        cy.get('[data-test="login-button"]').click()
    
        cy.url().should('include', validUser.expectedUrl)
        cy.get('.title').should('have.text', validUser.expectedTitle)
    
        cy.get('.inventory_item').first().contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')  

        cy.get('[data-test="remove-sauce-labs-backpack"]').first().contains('Remove')
        .should('have.css', 'color', colors.Red).click()

      })

      it('validate that user can add more tan one product to cart', () => {
        const validUser = users.standard_user;
    
        cy.get('[data-test="username"]').type(validUser.username)
        cy.get('[data-test="password"]').type(validUser.password)
        cy.get('[data-test="login-button"]').click()
    
        cy.url().should('include', validUser.expectedUrl)
        cy.get('.title').should('have.text', validUser.expectedTitle)
    
        cy.get('.inventory_item').first().contains('Add to cart').click()
        cy.get('.inventory_item').eq(2).contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('have.text', '2')

    
    })

})
    