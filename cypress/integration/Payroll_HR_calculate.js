describe ('Payroll_Calculate', () =>
{

    it('HR_Calculate', () =>
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


        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[1]/ul/li[2]/a')                                         //Click on Calculate option and validate
          .should('have.attr','href','https://demo.talenticks.meetcs.com/payroll/calculate/')
          .click()
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[1]/ul/li[2]/a/i')                                       //Click on Calculate option and validate
          .should('have.class','icon-calculator3')
        cy.log('Calculate menu button validated')                                                                   //validation msg


        cy.xpath('//*[@id="mCSB_1_container"]/a[18]/div/div[1]/h6/span')
          .should('have.text', 'June 2022')
          .click()
        cy.wait(3000)


        cy.xpath('//*[@id="recalculate"]','button').then(($btn) => 
        {
            if ($btn.attr('disabled')) 
            {
              cy.get('#leave_and_attendance_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .btn').click()
              cy.get('#view_more_modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    

              cy.get('#reimbursement_bt').click()
              cy.get('.swal2-confirm').click()
    
              cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
              cy.get('#view_reimbursement > .modal-dialog > .modal-content > .modal-footer > .btn').click()


              cy.get('#new_joinee_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get('#clicknewjoin').click()
              cy.get('#view_newjoin_modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()

    
              cy.get('#exit_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get(':nth-child(4) > :nth-child(3) > .btn').click()
              cy.get('#view_exit_emp_model > .modal-dialog > .modal-content > .modal-footer > .btn').click()

    
              cy.get('#bonuses_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get(':nth-child(5) > :nth-child(3) > .btn').click()
              cy.get('#view_bonuses > .modal-dialog > .modal-content > .modal-footer > .btn').click()

    
              cy.get('#holds_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get('#sal_hold_view').click()
              cy.get('#view_sal_hold > .modal-dialog > .modal-content > .modal-footer > .btn').click()


              cy.get('#arrears_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get('#arrears_view').click()
              cy.get('#view_arrears > .modal-dialog > .modal-content > .modal-footer > .btn').click()

    
              cy.get('#deduction_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get('#deduction_view').click()
              cy.get('#view_deduction > .modal-dialog > .modal-content > .modal-footer > .btn').click()

    
              cy.get('#loan_bt').click()
              cy.get('.swal2-confirm').click()

              cy.get('#loan_view').click()
              cy.get('#View_loan_modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
            }
            else
            {
              cy.xpath('//*[@id="recalculate"]').click()
              cy.get('.swal2-confirm').click()
              cy.wait(2000)
              cy.get('.swal2-confirm').click()
            }
        })

        cy.get('#preview').click()
        cy.get('.swal2-confirm').click()

        cy.get('#finalize').click()
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
        cy.get('.swal2-confirm').click()

        cy.get('#payregister').click()

        cy.get('#txtreason').type('test to reject pay register')
        cy.get('#btnReject').click()
        cy.get('.swal2-confirm').click()
        



    //recalculate

      //cy.xpath('//*[@id="mCSB_1_scrollbar_horizontal"]/div').click().scrollTo('bottom',{ensureScrollable: false})
      //cy.scrollTo(0, 800) // to scroll in entire window




    // cy.get(':nth-child(11) > .has-ul').click()                               //click on menu of Finance
    // cy.get(':nth-child(11) > ul > :nth-child(4) > .legitRipple').click()     //click on menu of MY TDS calculation
    // cy.wait(2000)
    // cy.get('.select2-selection').click()                                     //click on calendar
    // cy.get('li[id$="-178"]').click()                                         //select year



    
    // cy.get('.col-md-12 > table > tbody >tr > td > a').invoke('removeAttr', 'target').click()
    // //cy.url()
    //     //.should('include', 'https://demo.talenticks.meetcs.com/payroll/tds/get_tds_calculation/')
    // //cy.xpath('/html/body/div[4]/div/div[2]/div[1]/div/h4/span')
    //     //.should('have.text', 'TDS Calculations')
    
    // //LOGOUT
    //     cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})