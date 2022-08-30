describe ('Payroll_Issuance', () =>
{

    it('HR_Issuance', () =>
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

        

        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[1]/ul/li[3]/a/span').click()                                         //Click on Calculate option and validate
           

        cy.get('#select2-sel_emp_id-container').click()
        cy.get('li[id$="-64"]').click()
          

        cy.get('.col-md-2 > .btn').click()
        cy.wait(2000)
        
        //cy.get('#empname') //hardcoded
        cy.get('#select2-selpaymenttype-container').click()
        cy.get('li[id$="-4"]').click()
        cy.get('#select2-seladditionalcomp-container').click()
        cy.get('li[id$="-15"]').click()
        cy.get('#select2-selfinancialyear-container').click()
        cy.get('li[id$="2018"]').click()
        cy.get('#select2-selissuedmonth-container').click()
        cy.get('li[id$="-1"]').click()
        cy.get('#bonusamt').type('5414')
        cy.get('#btnSubmit').click()
        cy.get('.swal2-confirm').click()
        cy.get('.buttons-excel').click()
        cy.get('.buttons-pdf').click()


    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})