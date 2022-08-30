//CHANEGE VALUES OF LINE 54 AND LINE 66 BEFORE RUNNING

describe ('ORG setting Profile Maker Config', () =>
{

    it('ORG setting Profile Maker Config', () =>
    {
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')                                                  //visit URL
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
        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[3]/a')                                                  //Click on ORG Setting menu and validate
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'has-ul legitRipple')
          .click()
        cy.log('ORG Setting menu button validated')    

        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[3]/ul/li[10]/a')                                         //CLICK ON profile maker config
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'legitRipple')
          .click()
        cy.log('PROFILE MAKER CONFIG menu button validated')  
        cy.wait(2000)

        cy.xpath('//*[@name="tab[pd]"]').uncheck().check()                                                          //CHECK UNCHECK PERSONAL DETAILS
        cy.xpath('//*[@name="tab[fd]"]').check().uncheck()                                                          //CHECK UNCHECK FAMILY DETAILS
        cy.xpath('//*[@name="tab[ed]"]').check().uncheck()                                                          //CHECK UNCHECK EDUCATIONAL DETAILS
        cy.xpath('//*[@name="tab[we]"]').check().uncheck()                                                          //CHECK UNCHECK WORK EXPERIENCE
        cy.xpath('//*[@name="tab[ap]"]').check().uncheck()                                                          //CHECK UNCHECK ACADEMIC PROJECTS
        cy.xpath('//*[@name="tab[ce]"]').check().uncheck()                                                          //CHECK UNCHECK CERTIFICATIONS
        cy.xpath('//*[@name="tab[ec]"]').check().uncheck()                                                          //CHECK UNCHECK EXTRA CURRICULAR ACT
        cy.xpath('//*[@name="tab[eme]"]').check().uncheck()                                                          //CHECK UNCHECK EMERGENCY CONTACT
        cy.xpath('//*[@name="tab[ref]"]').check().uncheck()                                                          //CHECK UNCHECK REFERENCES

        
        cy.xpath('//*[@id="MandateDetails"]/div[3]/div/button').click()                                             //CLICK ON SUBMIT BUTTON    
        cy.get('.swal2-confirm').click()                                                                            //CLICK ON POPUP MSG


    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})
