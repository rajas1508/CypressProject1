//CHANEGE VALUES OF LINE 54 AND LINE 66 BEFORE RUNNING

describe ('ORG setting Salary Setting', () =>
{

    it('ORG setting Salary Setting', () =>
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

        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[3]/ul/li[3]/a')                                         //CLICK ON SALARY SETTING
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'legitRipple')
          .click()
        cy.log('Salary Setting menu button validated')  
        cy.wait(2000)

        cy.xpath('//*[@id="frmctc"]/div/label[3]/div/span/input').check()
        cy.wait(2000)
        cy.xpath('//*[@id="frmctc"]/div/label[2]/div/span/input').check()

        cy.xpath('//*[@id="btnSubmit"]').click()
        cy.get('.swal2-confirm').click()

        cy.xpath('//*[@id="add_component"]').click()
        cy.xpath('//*[@id="select2-component_type-container"]').click()
        cy.get('li[id$="-2"]').click()

        cy.xpath('//*[@id="enable_com"]').check()
        cy.xpath('//*[@id="no_formula"]').check()
        cy.xpath('//*[@id="yes_formula"]').check()
        cy.xpath('//*[@id="name_component"]').type('TESTING')
        cy.xpath('//*[@id="select2-formula_val-container"]').click()                     //COMMENT IF YOU SELECT NO  
        cy.get('li[id$="-[basic]"]').click()                                             //COMMENT IF YOU SELECT NO  
        // cy.xpath('//*[@id="max_limit"]').type('2500')                                 //COMMENT IF YOU SELECT YES

        cy.xpath('//*[@id="is_gross"]').check()
        cy.xpath('//*[@id="is_deduction"]').check()
        cy.xpath('//*[@id="is_reimbursement"]').check()
        cy.xpath('//*[@id="is_included_in_pf"]').check()
        cy.xpath('//*[@id="tax_exempt"]').check()                                         //COMMENT BELOW 3 LINE IN CASE YOU DONT CHECK THIS FIELD
            cy.xpath('//*[@id="section_tax"]/div[1]/span/span[1]/span').click()
            cy.get('li[id$="-2"]').click()
            cy.xpath('//*[@id="section_limit"]').type('1000')
        cy.xpath('//*[@id="override_level"]').check()
        cy.xpath('//*[@id="loss_affect"]').check()
        cy.xpath('//*[@id="paid_sep"]').check()
        cy.xpath('//*[@id="hide_payslip"]').check()

        cy.xpath('//*[@id="savecomponent"]/div/div[3]/button[2]').click()
        cy.get('.swal2-confirm').click()




    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})