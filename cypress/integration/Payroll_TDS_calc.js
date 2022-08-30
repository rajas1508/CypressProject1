describe ('Payroll_TDS Calculation', () =>
{

    it('HR_TDS Calculation', () =>
    {
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')                                                  //visit URL
        cy.get(':nth-child(2) > .form-control').should('have.attr','name','emailid').type('APPS000')                //enter data user id field and validate
        cy.log('User ID field validated')                                                                           //validation msg
        cy.get(':nth-child(3) > .form-control').should('have.attr', 'name','password').type('Apps@123')               //enter data password field and validate
        cy.log('Password field validated')                                                                          //validation msg
        cy.get('#btnLogin').should('have.id', 'btnLogin').click()                                                   //click on login button and validate
        cy.log('Login button validated')                                                                            //validation msg
        cy.wait(2000)
        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[1]/a')                                                  //Click on payroll menu and validate
          .should('have.attr','title','Payroll')
          .and('have.class', 'has-ul legitRipple')
          .click()
        cy.log('Payroll menu button validated')    

        

        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[1]/ul/li[4]/a').click()                                         //Click on Calculate option and validate
           

        cy.get('#select2-years-container').click()
        cy.get('li[id$="-247"]').click()
          

        //cy.xpath('//*[@id="13515"]/td[5]/a').click()
        cy.wait(2000)
        
        cy.xpath('//*[@id="20168"]/td[5]/a').invoke('removeAttr', 'target').click()


    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})