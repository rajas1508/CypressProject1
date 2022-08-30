describe ('MANAGER LEAVE MANAGEMENT APPROVE / REJECT LEAVE', () =>
{

    it('MANAGER LEAVE MANAGEMENT APPROVE / REJECT LEAVE', () =>
    {
                cy.visit('https://beta.talenticks.meetcs.com/lauth/login')                                                  //visit URL
                cy.clearCookies()
                cy.get(':nth-child(2) > .form-control')
                  .should('have.attr','name','emailid')
                  .type('50332')                                                                                          //enter data user id field and validate
                cy.log('User ID field validated')                                                                           //validation msg
        
                cy.get(':nth-child(3) > .form-control')
                  .should('have.attr', 'name','password')
                  .type('123456')                                                                                         //enter data password field and validate
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
                cy.xpath('//span[text()=" Approve / Reject Leave"]')                                                          //Click on approve/ reject Leave report menu and validate
                  .click()
                cy.log('Approve/ Reject Leave menu button validated')

                cy.xpath('(//a[text()="Approve"])[1]').click()

                cy.get('.swal2-confirm').click().wait(2000)
                cy.get('.swal2-confirm').click()

                cy.xpath('(//a[text()="Reject"])[1]').click()
                cy.get('#txtrejectreason').type('rejected for testing')
                cy.get('.btn-success').click().wait(2000)
                
                //cy.get('.swal2-confirm').click()
                //added this due to error
                cy.get('.btn-default').click()
                              


            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})