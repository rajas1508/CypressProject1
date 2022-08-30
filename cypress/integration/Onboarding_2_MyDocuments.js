describe ('Onboarding_2_MyDocuments', () =>
{

    it('Onboarding_2_MyDocuments', () =>
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
        
                cy.wait(2000)
                cy.xpath('//span[text()=" My Documents"]')                                                          //Click 
                  .click()
                cy.log('My Documents menu button validated')

                //dropdown select file type
                cy.xpath('//span[@class="select2-selection__rendered" and @id="select2-filetype-container"]').click()
                cy.get('li[class^="select2-results__option"][id^="select2-filetype-result-"]:nth-child(1)').click()
                const p = 'bill.png'
                cy.get('input.file-uploads-mandatory').attachFile(p)
                cy.get('button[class="btn btn-primary legitRipple"]').click()
                cy.get('.swal2-confirm').click()

                cy.xpath('//a[text()="View Files"]').click()
                cy.xpath('(//button[@class="btn btn-default btn-icon dropdown-toggle"])[1]').click()
                cy.xpath('(//a[@class="btn_del_file"])[1]').click()
                cy.get('.swal2-confirm').click().wait(2000)
                cy.get('.swal2-confirm').click()
                
                cy.xpath('//a[text()="Letters"]').click().wait(2000)



            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})