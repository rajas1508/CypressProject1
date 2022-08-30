describe ('Onboarding_1_CompPolicies', () =>
{

    it('Onboarding_1_CompPolicies', () =>
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
                cy.xpath('//span[text()=" Company Policies"]')                                                          //Click 
                  .click()
                cy.log('Company Policies menu button validated')

                cy.xpath('(//i[@class="icon-file-text2"])/parent::button').click().wait(3000)
                cy.get('iframe').scrollTo('bottom',{ensureScrollable: false})
                cy.xpath('//*[@id="frmacceptpolicy"]/div/div/div[1]/button').click().wait(2000) 
            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})