describe ('HR LEAVE MANAGEMENT LEAVE REPORT', () =>
{

    it('HR LEAVE MANAGEMENT LEAVE REPORT', () =>
    {
                cy.visit('https://beta.talenticks.meetcs.com/lauth/login')                                                  //visit URL
                cy.clearCookies()
                cy.get(':nth-child(2) > .form-control')
                  .should('have.attr','name','emailid')
                  .type('APPS000')                                                                                          //enter data user id field and validate
                cy.log('User ID field validated')                                                                           //validation msg
        
                cy.get(':nth-child(3) > .form-control')
                  .should('have.attr', 'name','password')
                  .type('Apps@123')                                                                                         //enter data password field and validate
                cy.log('Password field validated')                                                                          //validation msg
        
                cy.get('#btnLogin')
                  .should('have.id', 'btnLogin')
                  .click()                                                                                                  //click on login button and validate
                cy.log('Login button validated')                                                                            //validation msg
        
                cy.wait(2000)
                
                cy.xpath('//span[text()=" Leave Management"]')                                                               //Click on leave mgmt menu and validate
                  .click()
                cy.log('Leave Management menu button validated')    
        
                cy.wait(4000)
                cy.xpath('(//span[text()=" Leave Report"])[1]')                                                          //Click on HR Leave report menu and validate
                  .click()
                cy.log('Leave report menu button validated')

                cy.xpath('//*[@class="icon-file-excel"]/parent::span').click()
                cy.xpath('//*[@class="icon-file-pdf"]/parent::span').click()

            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})