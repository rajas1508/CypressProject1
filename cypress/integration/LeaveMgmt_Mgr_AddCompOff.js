
//MAKE CHANGES AT LINE 38
describe ('MANAGER ADD COMP OFF', () =>
{

    it('MANAGER ADD COMP OFF', () =>
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
                cy.xpath('//span[text()=" Add Comp-Off"]')                                                                  //Click on MANAGER ADD COMP OFF menu and validate
                  .click()
                cy.log('Leave report menu button validated')

                cy.xpath('//*[@id="select2-empvalue-container"]').click()
                cy.get('li:contains("Meetcs Admin (APPS000)")').click()
                cy.xpath('//*[@id="from"]').clear().type('16/08/2022').tab()
                cy.xpath('//*[@id="in_time"]').click()
                cy.xpath('//li[@class="ui-timepicker-am"]').contains('9:30am').click({multiple:true})

                cy.xpath('//*[@id="out_time"]').click()
                cy.get('body > div:nth-child(11) > ul > li:nth-child(23)').click()
                cy.get('.text-right > .btn')


                cy.get('button:contains("Add Comp Off ")').click()
                cy.get('.swal2-confirm').click()
                cy.xpath('(//i[@class="icon-x"])[1]').click({multiple:true})
                cy.get('.swal2-confirm').click().wait(2000)
                cy.get('.swal2-confirm').click()

                cy.get('a:contains("Click here to download")').click()
                cy.xpath('//*[@class="icon-file-excel"]/parent::span').click().wait(2000)
                cy.xpath('//*[@class="icon-file-pdf"]/parent::span').click().wait(2000)


            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})