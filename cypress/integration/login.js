import loginPage from "../pages/loginPage"


let loginpage = new loginPage()
describe('Ttest>', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  
})

  it('001 login with valid account', () => {
    loginpage.InputUsername()
        .type("standard_user")
    loginpage.inputPassword()
        .type("secret_sauce")
    loginpage.LoginButton()
        .click()
    cy.get('.app_logo')
        .should('exist')
        
  })
  it('002 login with invalid password', () => {
    loginpage.InputUsername()
        .type("standard_user")
    loginpage.inputPassword()
        .type("randompass")
    loginpage.LoginButton()
        .click()
    loginpage.ErrorMessage()
        .should('have.text','Epic sadface: Username and password do not match any user in this service')    
  })
  it('003 login with locked account', () => {
    loginpage.InputUsername()
        .type("locked_out_user")
    loginpage.inputPassword()
        .type("secret_sauce")
    loginpage.LoginButton()
        .click()
    loginpage.ErrorMessage()
        .should('have.text','Epic sadface: Sorry, this user has been locked out.')    
  })

})


