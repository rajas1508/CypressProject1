
//UPDATE DATE AT LINE 43 & 44, SET CURRENT DATE//


describe ('MANAGER LEAVE MANAGEMENT REGULARIZE', () =>
{

    it('MANAGER LEAVE MANAGEMENT REGULARIZE', () =>
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
                cy.xpath('//span[text()=" Regularize"]')                                                                    //Click on REGULARIZE menu and validate
                  .click()
                cy.log('Leave report menu button validated')

                cy.xpath('//*[@class="icon-file-excel"]/parent::span').click()
                cy.wait(2000)
                cy.xpath('//*[@class="icon-copy4"]/parent::span').click().wait(2000)

                cy.xpath('(//a[@class="change_time"])[1]').click()
                cy.xpath('//input[@id="txtCheckIn"]').clear().type('19-08-2022 09:30:00','{enter}')
                cy.xpath('//input[@id="txtCheckOut"]').clear().type('19-08-2022 20:30:00','{enter}')
                cy.xpath('//*[@id="uniform-is_check_out"]').click()
                cy.xpath('//*[@id="txtReason"]').clear().type('abcd')
                cy.get('button:contains("Update")').click()
                cy.get('.swal2-confirm').click()



            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})