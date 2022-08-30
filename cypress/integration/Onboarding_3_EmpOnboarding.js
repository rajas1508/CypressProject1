describe ('Onboarding_3_EmpOnboarding', () =>
{

    it('Onboarding_3_EmpOnboarding', () =>
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
                
                cy.xpath('//span[text()=" Onboarding"]')                                                               //Click 
                  .click()
                cy.log('Onboarding menu button validated')     
        
                cy.wait(4000)
                cy.xpath('//span[text()=" Employee Onboarding"]')                                                          //Click
                  .click()
                cy.log('Employee Onboarding menu button validated')

                cy.xpath('(//a[@class="btn btn-success btn-rounded btn-xs legitRipple"])[1]').click()
                cy.get('.swal2-confirm').click().wait(2000)
                cy.get('.swal2-confirm').click()

                cy.xpath('//a[text()="View On-boarded"]').click().wait(2000)
                cy.xpath('//a[text()="Confirm Employees"]').click()
                
                cy.xpath('(//a[text()=" Confirm"])[1]').click().wait(2000)
                cy.xpath('(//button[text()="Close"])[2]').click()

                cy.xpath('(//a[text()=" Extend Probation"])[1]').click().wait(2000)
                cy.xpath('(//button[text()="Close"])[3]').click()
                cy.wait(2000)


            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})