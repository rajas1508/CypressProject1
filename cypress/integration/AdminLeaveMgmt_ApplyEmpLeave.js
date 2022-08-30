describe ('Admin Leave Management Authorize Leave', () =>
{

    it('Admin Leave Management Authorize Leave', () =>
    {
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
        
        cy.xpath('//span[text()=" Leave Management"]')                                                  //Click on leave mgmt menu and validate
          .click()
        cy.log('Leave Management menu button validated')    

        cy.xpath('(//span[text()=" Apply Employee Leave"])[position()=1]')
          .click()
        //HR ADMIN LEAVE MANAGEMENT
        //ADD LEAVE
        cy.xpath('//span[text()="Select Employee"]').click()
        cy.get('li[id$="-196"]').click()

        cy.get('#select2-leavetype-container').click()
        cy.get('li[id$="-8"]').click()
        cy.xpath('//*[@id="from"]').click()
        cy.xpath('//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]/a').click()
        cy.xpath('//*[@id="to"]').click()
        cy.xpath('//*[@id="ui-datepicker-div"]/table/tbody/tr[2]/td[5]/a').click()
        cy.xpath('//*[@id="reason"]').type('abcd')
        cy.xpath('//*[@id="btnSubmit"]').click()
        cy.wait(6000)
        cy.get('.swal2-confirm').click()
        cy.xpath('(//a[@tabindex="0"]/span/span)[1]').click()
        cy.xpath('(//a[@tabindex="0"]/span/span)[2]').click()

    //LOGOUT
        cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()

    })

})