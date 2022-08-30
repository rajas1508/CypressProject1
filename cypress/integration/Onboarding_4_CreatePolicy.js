describe ('Onboarding_4_CreatePolicy', () =>
{

    it('Onboarding_4_CreatePolicy', () =>
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
                cy.xpath('//span[text()=" Create Policy"]')                                                          //Click on HR Leave report menu and validate
                  .click()
                cy.log('Create Policy menu button validated')


                cy.xpath('(//i[@class="icon-file-eye2"])[1]').click()
                cy.xpath('(//i[@class="icon-close2"])[1]').click()
                
                cy.xpath('(//a[text()=" Create Policies"])[1]').click()
                cy.get('#polname').type('MaxBupaArogyaSanjeevani')
                cy.get('#poldesc').type('Jeevan ke sath bhi aur jeevan ke baad bhi')
                cy.xpath('(//*[@id="select2-selpoltype-container"])[last()]').click()
                cy.get('li[id$="-3"]').click()
                //cy.xpath('(//div[@class="note-editable panel-body"]/p)[2]')
                cy.get('.note-editable').type('Policy is simple LIC: Jeevan ke sath bhi aur jeevan ke baad bhi')
                const a = 'policy.pdf'
                //cy.xpath('(//span[@class="action btn bg-blue"])[2]')
                cy.get('.policy-file-upload').attachFile(a)
                //cy.xpath('(//*[@id="btn_create"]/text())[last()]')






                cy.get('#btn_create').click().wait(2000)
                //##### THIS CLICK HAS UNCAUGHT EXCEPTION ERROR ######//
             

                
                cy.get('.swal2-confirm').click().wait(2000)

                cy.xpath('(//i[@class="icon-file-eye2"])[last()]').click()
                cy.xpath('(//span[@id="select2-selpolstatus-container"])[last()]').click()
                cy.get('li[id$="-1"]').click()

                cy.xpath('(//*[@id="btn_edit"])[last()]').click().wait(2000)
                cy.get('.swal2-confirm').click().wait(2000)




                



            

            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})