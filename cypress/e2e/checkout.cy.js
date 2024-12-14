import { users } from '../support/users';
import { colors
 } from '../support/color';

describe('Sauce Demo checkout functionality', () => {

    beforeEach(() => {

        cy.visit('/')
        cy.url().should('include', 'saucedemo')
      })
    
    it('Validate that user can checkout the added product', () => {
      const validUser = users.standard_user;
      const checkout = users.checkout_info;
    
      cy.get('[data-test="username"]').type(validUser.username)
      cy.get('[data-test="password"]').type(validUser.password)
      cy.get('[data-test="login-button"]')
      .click()

//add the product to the cart
      cy.get('.inventory_item').first().contains('Add to cart').click()
      cy.get('.shopping_cart_badge').should('have.text', '1')

    //Cart paeg validation
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('have.css', 'color', colors.Black)
    .and('have.text', 'Your Cart')
    cy.get('[data-test="continue-shopping"]').should('be.visible')
    cy.get('[data-test="checkout"]').should('have.css', 'background-color', colors.Green).click()

    //checkout
    cy.get('[data-test="firstName"]').type(checkout.firstname)
    cy.get('[data-test="lastName"]').type(checkout.lastname)
    cy.get('[data-test="postalCode"]').type(checkout.Postalcode)
    cy.get('[data-test="continue"]').click()


//finish
cy.get('[data-test="finish"]').click()

//verify the success message
cy.get('[data-test="pony-express"]').should('be.visible')
.and('have.css', 'color', colors.TGreen)
cy.get('[data-test="complete-header"]').should('be.visible')
.and('have.css', 'color', colors.Black).and('have.text', 'Thank you for your order!')
 
  
 
    })



})