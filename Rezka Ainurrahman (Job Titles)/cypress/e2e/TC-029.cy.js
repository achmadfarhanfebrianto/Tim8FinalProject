import { faker } from '@faker-js/faker';

//Edit job title without fill all field
describe('failed_editjobtitle', () => {
    it('failed_editjobtitle', () => {
      var username=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
      var password=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
      let jobTitle = faker.name.jobTitle();
      var file = 'pdf-file.pdf'

      cy.visit('/')
      cy.get(username).type("Admin")
      cy.get(password).type("admin123")
      cy.get('.oxd-button').click()
      cy.wait(2000) 
      cy.get('.oxd-topbar-header-title').should('exist')//validasi login
  
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()//klik admin
      cy.wait(1000) 
      cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()//klik job
      cy.wait(1000) 
      cy.get('.oxd-dropdown-menu > :nth-child(1)').click()//klik job title
      cy.scrollTo('top')
      cy.get('.orangehrm-header-container > .oxd-text').should('exist')//validasi job title

      cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2)').click()//klik edit
      cy.get(':nth-child(2) > .oxd-input').clear()//clear job title
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear()//clear job deskripsi
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear()//clear note
      cy.get('.oxd-button--secondary').click()//save

      cy.get('.oxd-input-group > .oxd-text').should('exist')//validasi tidak bisa edit job title
    })
  })