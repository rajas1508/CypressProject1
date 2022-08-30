

//NOT WORKING AS PAGE LOADING TAKING TIME TO LOAD

describe ('HR LEAVE MANAGEMENT APPROVE EMPLOYEE LEAVE', () =>
{

    it('HR LEAVE MANAGEMENT APPROVE EMPLOYEE LEAVE', () =>
    {
                cy.clearCookies()
                cy.visit('https://beta.talenticks.meetcs.com/lauth/login')                                                  //visit URL              
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
        
                cy.wait(2000)
                cy.visit('https://beta.talenticks.meetcs.com/leavemgm/hr_admin/all_leaves/')
                cy.xpath('(//span[text()=" Authorize Leave"])[2]')                                                           //Click on HR Leave credit menu and validate
                  .click()
                cy.log('Authorize Leave menu button validated')
                cy.wait(2000)

                cy.xpath('//span[@class="icon-file-excel"]').click()
                cy.wait(5000)
                cy.xpath('//span[@class="icon-file-pdf"]').click()
            
                //APPROVE (change number of tr for change it from list)
                cy.xpath('//*[@id="all_leaves"]/tbody/tr[4]/td[8]/a[1]').click()
                cy.get('.swal2-confirm').click()
                cy.wait(2000)
                cy.get('.swal2-confirm').click()
        
                //REJECT (change number of tr for change it from list)
                cy.xpath('//*[@id="all_leaves"]/tbody/tr[4]/td[8]/a[2]')
                cy.xpath('//*[@id="txtrejectreason"]').type('abcd')
                cy.get('.swal2-confirm').click()
                cy.wait(5000)
        
                //REMOVE (change number of tr for change it from list)
                cy.xpath('//*[@id="all_leaves"]/tbody/tr[12]/td[8]/a[3]')
                cy.get('.swal2-confirm').click()
                cy.wait(2000)
                cy.get('.swal2-confirm').click()
                cy.wait(5000)



            //LOGOUT
                //cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})