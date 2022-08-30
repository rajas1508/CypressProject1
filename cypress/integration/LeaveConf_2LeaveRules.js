describe ('HR SUPERADMIN LEAVE CONFIGURATION LEAVE RULES', () =>
{

    it('HR SUPERADMIN LEAVE CONFIGURATION LEAVE RULES', () =>
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
                
                cy.xpath('//span[text()=" Leave Configuration"]')                                                           //Click on leave Configuration menu and validate
                  .click()
                cy.log('Leave Configuration menu button validated')    
        
                cy.wait(4000)
                cy.xpath('(//span[text()=" Leave Rules"])[1]')                                                                 //Click on off days menu and validate
                  .click()
                cy.log('Off Days menu button validated')

                cy.xpath('//*[@id="select2-leavetype-container"]').click()
                cy.get('li[id$="-1"]').click()                                      //1 SICK 2 PRIVILEGE 4 COMPENSATORY 7 LWP 8 MATERNITY 11 CASUAL 12 BALANCING LEAVE

                cy.xpath('//*[@id="min_leaves_application"]').type('1')
                cy.xpath('//*[@id="max_leaves_application"]').type('2')
                
                cy.xpath('//*[@id="leave_paid_n"]').check()
                cy.xpath('//*[@id="leave_paid_y"]').check()

                cy.xpath('//*[@id="allocate_no_of_days"]').type('5')
                cy.xpath('//*[@id="min_leaves_applied"]').type('1')
                cy.xpath('//*[@id="max_leaves_applied"]').type('3')
                
                cy.xpath('//*[@id="leave_during_probation_y"]').check()
                cy.xpath('//*[@id="leave_during_probation_n"]').check()

                cy.xpath('//*[@id="doc"]').check()
                cy.xpath('//*[@id="doj"]').check()

                cy.xpath('//*[@id="weekoffs_counted_y"]').check()
                cy.xpath('//*[@id="weekoffs_counted_n"]').check()

                cy.xpath('//*[@id="holidays_counted_y"]').check()
                cy.xpath('//*[@id="holidays_counted_n"]').check()

                cy.xpath('//*[@id="can_hr_apply_y"]').check()
                cy.xpath('//*[@id="can_hr_apply_n"]').check()
                
                cy.xpath('//*[@id="max_leaves_per_month"]').type('3')

                cy.xpath('//*[@id="ispaid_certificate_div"]/div[4]/div/div/div/div/button').click()
                // cy.xpath('(//ul[@class="multiselect-container dropdown-menu"])[1]/child::li[1]').check()
                // cy.xpath('(//ul[@class="multiselect-container dropdown-menu"])[1]/child::li[2]').check()
                // cy.xpath('(//ul[@class="multiselect-container dropdown-menu"])[1]/child::li[3]').check()
                
                cy.xpath('((//ul[@class="multiselect-container dropdown-menu"])[1]/li/a/label/div/span/input)[1]').check()
                //cy.xpath('((//ul[@class="multiselect-container dropdown-menu"])[1]/li/a/label/div/span/input)[2]').check()
                cy.xpath('((//ul[@class="multiselect-container dropdown-menu"])[1]/li/a/label/div/span/input)[3]').check()

                cy.xpath('(//*[@class="select2-selection__rendered" and @title="select Leave Based On Years"])[1]').click({force:true})
                cy.get('li[id$="-1"]').click()

                cy.xpath('//*[@id="select2-leave_credit_date-container"]').click()
                cy.get('li[id$="-1"]').click()

                cy.xpath('//*[@id="certificate_needed_y"]').check()
                cy.xpath('//*[@id="certificate_needed_n"]').check()

                cy.xpath('//*[@id="n_pre_approval"]').check()
                cy.xpath('//*[@id="y_pre_approval"]').check()

                cy.xpath('//*[@id="approval_needed_before"]').type('3')

                cy.xpath('//*[@id="y_carry_fwd"]').check()
                cy.xpath('//*[@id="n_carry_fwd"]').check()

                //cy.xpath('(//input[@title="Peopel can apply for half-day leave"])[1]').click()
                cy.xpath('(//button[@class="multiselect dropdown-toggle btn btn-default"])[2]/child::span').click()
                cy.xpath('((//ul[@class="multiselect-container dropdown-menu"])[2]/li/a/label/div/span/input)[1]').check()
                cy.xpath('((//ul[@class="multiselect-container dropdown-menu"])[2]/li/a/label/div/span/input)[2]').check()
                cy.xpath('((//ul[@class="multiselect-container dropdown-menu"])[2]/li/a/label/div/span/input)[3]').check()

                cy.xpath('//*[@id="yes_encashment"]').check()
                cy.xpath('//*[@id="no_encashment"]').check()
        


               cy.xpath('//*[@id="btnSubmit"]').click()

               cy.get('.swal2-confirm').click()


            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})