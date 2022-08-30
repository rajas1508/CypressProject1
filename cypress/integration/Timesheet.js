describe ('Timesheet', () =>
{

    it('Timesheet', () =>
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
                
                cy.xpath('//span[text()=" Timesheet"]')                                                               //Click 
                  .click()
                cy.log('Timesheet menu button validated')     
        
                cy.wait(2000)
                cy.xpath('//span[text()=" My Timesheet"]')                                                          //Click
                  .click()
                cy.log('My Timesheet button validated')

                cy.xpath('//*[@id="select2-selProject1-container"]')                                                          //Click
                .click()
                cy.get('li[id$="-2"]').click().wait(2000)

                cy.get('#select2-selTask1-container').click()
                cy.get('li[id$="-2"]').click()

                cy.xpath('//*[@id="txttime[mon][1]"]').clear().type('09.00')

                cy.get('.btn-success').click().wait(2000)
                cy.get('.swal2-confirm').click().wait(2000)
                

                

    })

    it('Logout', () =>
    {
            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})