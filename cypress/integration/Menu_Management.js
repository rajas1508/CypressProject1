describe ('Menu Management', () =>
{

    it('Menu Management Add Menu', () =>
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
                
                cy.xpath('//span[text()=" Menu Management"]')                                                               //Click 
                  .click()
                cy.log('Menu Management menu button validated')     
        
                cy.wait(4000)
                cy.xpath('//span[text()=" Add menu"]')                                                          //Click
                  .click()
                cy.log('Add menu button validated')

                cy.xpath('//a[text()="Add Menu"]')                                                          //Click
                .click()
                cy.log('Add menu button validated')
                
                cy.xpath('//*[@id="name"]').type('test')
                cy.xpath('//*[@id="link"]').type('#')
                cy.xpath('//*[@id="order_no"]').type('0')
                cy.xpath('//*[@id="p_menu"]').select('Sal Stru Bulk Upload')
                cy.xpath('//*[@id="icon_class"]').type('fas fa-glass-cheers')
                cy.get('.btn-success').click()
                

    })

    it('Logout', () =>
    {
            //LOGOUT
                //cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})