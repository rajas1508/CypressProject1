describe ('Appreciation Appreciate', () =>
{

    it('Employee_Appreciation Appreciate', () =>
    {
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')                                                  //visit URL
        cy.get(':nth-child(2) > .form-control').should('have.attr','name','emailid').type('APPS000')                //enter data user id field and validate
        cy.log('User ID field validated')                                                                           //validation msg
        cy.get(':nth-child(3) > .form-control').should('have.attr', 'name','password').type('Apps@123')               //enter data password field and validate
        cy.log('Password field validated')                                                                          //validation msg
        cy.get('#btnLogin').should('have.id', 'btnLogin').click()                                                   //click on login button and validate
        cy.log('Login button validated')                                                                            //validation msg
        cy.wait(2000)
        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[2]/a')                                                  //Click on Appreciation menu and validate
          .should('have.attr','title','Appreciation')
          .and('have.class', 'legitRipple')
          .click()
        cy.log('Appreciation menu button validated')    

        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[2]/ul/li[5]/a')
          .should('have.attr','title','Appreciation')
          .and('have.class', 'legitRipple')
          .click()
        cy.log('View Appreciation menu button validated') 
           
        cy.wait(2000)


    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})