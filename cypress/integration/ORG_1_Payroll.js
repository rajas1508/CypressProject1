describe ('ORG setting Payroll', () =>
{

    it('ORG setting Payroll', () =>
    {
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')                                                  //visit URL
        cy.get(':nth-child(2) > .form-control').should('have.attr','name','emailid').type('APPS000')                //enter data user id field and validate
        cy.log('User ID field validated')                                                                           //validation msg
        cy.get(':nth-child(3) > .form-control').should('have.attr', 'name','password').type('Apps@123')               //enter data password field and validate
        cy.log('Password field validated')                                                                          //validation msg
        cy.get('#btnLogin').should('have.id', 'btnLogin').click()                                                   //click on login button and validate
        cy.log('Login button validated')                                                                            //validation msg
        cy.wait(2000)
        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[3]/a')                                                  //Click on ORG Setting menu and validate
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'has-ul legitRipple')
          .click()
        cy.log('ORG Setting menu button validated')    

        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[3]/ul/li[2]/a')
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'legitRipple')
          .click()
        cy.log('Payroll Setting menu button validated') 
           
        cy.wait(2000)





        // cy.xpath('//*[@id="payrollsetting"]/div[1]/div/div/div/fieldset/div[1]/div/span/span[1]/span').click()
        // cy.get('li[id$="-1"]').click()

        // cy.xpath('//*[@id="select2-startdate_1-container"]').click()
        // cy.get('li[id$="2022"]').click()

        // cy.xpath('//*[@id="select2-selectday-container"]').click()
        // cy.get('li[id$="-25"]').click()

        // cy.xpath('//*[@id="startdate"]').click()
        // cy.xpath('//*[@id="ui-datepicker-div"]/table/tbody/tr[3]/td[1]/a').click()

        // cy.xpath('//*[@id="tds_calc"]').check()
        
        // cy.xpath('//*[@id="tds_calc"]').check()

        // cy.xpath('//*[@id="statutory_percentage"]').clear().type('11')
        // cy.wait(1000)
        // cy.xpath('//*[@id="exwy"]').check()
        // cy.wait(1000)
        // cy.xpath('//*[@id="exwn"]').check()
        // cy.wait(1000)
        // cy.xpath('//*[@id="exhy"]').check()
        // cy.wait(1000)
        // cy.xpath('//*[@id="exhn"]').check()
        // cy.wait(1000)
    
        // cy.xpath('//*[@id="payrollsetting"]/div[3]/button/b').click()

        // cy.get('.swal2-confirm').click()





        // cy.get(':nth-child(2) > #my_financial_setting').click() //My Financial settings
        // //cy.xpath('//*[@id="my_financial_setting"]').click({ multiple: true }) 
        // cy.xpath('//*[@id="chk_hra"]').click()
        // cy.xpath('//*[@id="chk_hra"]').click()

        // cy.get('#chk_hold_sal').click()
        // cy.get('#chk_hold_sal').click()

        // cy.get('#approval_before').click()
        // cy.get('#approval_before').click()

        // cy.get('#declaration_proof').click()
        // cy.get('#declaration_proof').click()
        
        // cy.get('#select_mmdd2').click()
        // cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').click()
        
        // cy.get('#select2-year2-container').click()
        // cy.get('.select2-results__options').find('li[id$="09"]').contains('Oct').click();
        // // cy.get('#select2-year2-container').click()
        // // cy.get('li[id$="06"]').click()      

        // cy.get('#select_mmdd3').click()
        // cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click()
        
        // cy.get('#select2-year3-container').click()
        // cy.get('.select2-results__options').find('li[id$="09"]').contains('Nov').click();

        // cy.get('.text-right > .btn').click()
        // cy.get('.swal2-confirm').click()






        // cy.get(':nth-child(3) > #pf_esi').click()
        // cy.xpath('//*[@id="pfEsi"]/div[1]/div/div[1]/div/div[2]/div/label/div/div/span[2]').click()
        // cy.xpath('//*[@id="pfEsi"]/div[1]/div/div[1]/div/div[2]/div/label/div/div/span[2]').click()

        // cy.get('#pf_amount').clear().type('4857.21')

        // cy.get('#limitpf').check()
        // cy.get('#allowpf').check()

        // cy.get('#employerpay').uncheck().wait(2000).check()
        // cy.get('#emppf').uncheck().wait(2000).check()

        // cy.get('#empamount').clear().type('1789.99')

        // cy.get('#hidepf').check().wait(2000).uncheck()
        // cy.get('#othercharg').check().wait(2000).uncheck()
        // cy.get('#allowadd').check().wait(2000).uncheck()

        // cy.xpath('//*[@id="pfEsi"]/div[2]/div/div[1]/div/div[2]/div/label/div/div/span[2]').click()
        // cy.xpath('//*[@id="pfEsi"]/div[2]/div/div[1]/div/div[2]/div/label/div/div/span[2]').click()

        // cy.get('#esi_amount').clear().type('1548.85')
        // cy.get('#esiemp').check().uncheck().check()
        // cy.get('#esiempamount').clear().type('2102.01')
        // cy.get('#esiemployer').check().uncheck().check()
        // cy.get('#esiemployeramount').clear().type('1104.54')
        // cy.get('#esioverriding').check().uncheck().check()
        // cy.get('#payemployer').check().uncheck().check()
        // cy.get('#esipayslip').check().uncheck().check()
        // cy.get('#esical').check().uncheck().check()
        // cy.get('#esirestrict').check().uncheck().check()
        // cy.get('#esielig').check().uncheck().check()
        // cy.get('#esicont').check().uncheck().check()

        // cy.get('.text-right > .btn').click()
        // cy.get('.swal2-confirm').click()






        // //CLICK ON MENU TAX SLAB
        // cy.get(':nth-child(4) > #tax_slab').click()
        // //EDIT ACTIVATE DEACTIVATE
        // //cy.xpath('//*[@id="11"]/td[9]/a').click() //*CUSTOM XPATH*//
        // cy.get('.col-md-12 > #taxData_wrapper > div > table > tbody > tr[id="11"] > .class-absolute > #editdata >.icon-pencil7').click() //*CUSTOM CSS SELECTOR*//
        // cy.xpath('//*[@id="txt_edit_tax"]').clear().type('7')                                //CLEAR & ENTER TAX
        // cy.xpath('//*[@id="edit_dt_effectivedt"]').click()                                   //CLICK ON CALENDAR
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[1]').select('Dec')             //MONTH SELECTION
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[2]').select('2025')            //YEAR SELECTION
        // cy.xpath('//*[@id="ui-datepicker-div"]/table/tbody/tr[5]/td[2]').click()             //DATE SELECTION FROM CALENDAR
        // cy.xpath('//*[@id="edit_taxdet"]/div/div[2]/div/div[1]/span/span[1]/span').click()   //DROP DOWN FOR OPERATOR
        // cy.get('li[id$="-2"]').click()                                                  
        // cy.xpath('//*[@id="edit_txt_age"]').clear().type('59')                               //CLEAR & ENTER RANGE
        // cy.xpath('//*[@id="edit_taxdet"]/div/div[3]/div/div[1]/span/span[1]/span').click()   //DROPDOWN FOR RANGE
        // cy.get('li[id$="-2"]').click()    
        // cy.xpath('//*[@id="txt_edit_range_min"]').clear().type('0.00')
        // cy.xpath('//*[@id="txt_edit_range_max"]').clear().type('285000.00')                  //CLEAR & TYPE RANGE MAX AMOUNT
        // cy.xpath('//*[@id="ed_tax_amount"]').clear().type('0.00')                            //CLEAR & TYPE TAX AMOUNT
        // cy.get('[id="ed_radio_status_not_active"]').check()                                  //CHECK NOT ACTIVE
        // cy.get('[id="ed_radio_status_active"]').check()                                      //CHECK ACTIVE
        // cy.get('#edit_taxdet > .modal-body > :nth-child(5) > .col-md-12 > #btnSave').click() //CLICK ON UPDATE
        // cy.get('.swal2-confirm').click()

        // //ADD
        // cy.xpath('//*[@id="btn_add"]').click()                                               //CLICK ON ADD
        // cy.xpath('//*[@id="txt_tax"]').clear().type('7')                                //CLEAR & ENTER TAX
        // cy.xpath('//*[@id="dt_effectivedt"]').click()                                   //CLICK ON CALENDAR
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[1]').select('Dec')             //MONTH SELECTION
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[2]').select('2025')            //YEAR SELECTION
        // cy.xpath('//*[@id="ui-datepicker-div"]/table/tbody/tr[5]/td[2]').click()             //DATE SELECTION FROM CALENDAR
        // cy.xpath('//*[@id="select2-selopr-container"]').click()   //DROP DOWN FOR OPERATOR
        // cy.get('li[id$="-2"]').click()                                                  
        // cy.xpath('//*[@id="txt_age"]').clear().type('58')                               //CLEAR & ENTER RANGE
        // cy.xpath('//*[@id="select2-sel_range-container"]').click()   //DROPDOWN FOR RANGE
        // cy.get('li[id$="-2"]').click()    
        // cy.xpath('//*[@id="txt_range_min"]').clear().type('11.00')
        // cy.xpath('//*[@id="txt_range_max"]').clear().type('275800.00')                  //CLEAR & TYPE RANGE MAX AMOUNT
        // cy.xpath('//*[@id="tax_amount"]').clear().type('0.00')                            //CLEAR & TYPE TAX AMOUNT
        // cy.get('[id="radio_status_not_active"]').check()                                  //CHECK NOT ACTIVE
        // cy.get('[id="radio_status_active"]').check()                                      //CHECK ACTIVE
        // cy.get('#add_taxdet > .modal-body > :nth-child(5) > .col-md-12 > #btnSave').click() //CLICK ON UPDATE
        // cy.get('.swal2-confirm').click()





        // //INVESTMENT DECLARATION
        // cy.get(':nth-child(5) > #investment_declaration').click()
        // cy.xpath('//*[@id="1"]/td[7]/a').click()
        // cy.xpath('//*[@id="update_name"]').clear().type('Testing to check edit Investment declaration from payroll settings')
        // cy.xpath('//*[@id="update_maximum_limit"]').clear().type('590.00')
        // cy.xpath('//*[@id="active"]').select('Yes')
        // cy.xpath('//*[@id="update_is_old_regime"]').check().check()
        // cy.xpath('//*[@id="update_is_new_regime"]').uncheck().check().uncheck()
        // cy.xpath('//*[@id="btnSubmit"]').click()
        // cy.get('.swal2-confirm').click()






        // //SURCHARGE
        // cy.get(':nth-child(6) > #surcharge').click()                                        //CLICK ON SURCHARGE
        // //ADD
        // cy.xpath('//*[@id="btn_add"]').click()
        // cy.xpath('//*[@id="txt_tax"]').clear().type('6')
        // cy.xpath('//*[@id="dt_effectivedt"]').click()
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[1]').select('Oct')
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[2]').select('2023')
        // cy.xpath('//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[6]').click()
        // cy.xpath('//*[@id="select2-selop-container"]').click()
        // cy.get('li[id$="-2"]').click()
        // cy.xpath('//*[@id="txt_range_min"]').type('27090')
        // cy.xpath('//*[@id="txt_range_max"]').type('50090')
        // cy.xpath('//*[@id="radio_status_not_active"]').check()
        // cy.xpath('//*[@id="radio_status_active"]').check()
        // cy.get('#add_taxdet > .modal-body > :nth-child(4) > .col-md-12 > #btnSave').click()
        // //cy.xpath('//*[@id="btnSave"]').click({multiple:true},{force:true})    //not working
        // cy.get('.swal2-confirm').click()

        // //EDIT        
        // cy.xpath('//*[@id="1"]/td[6]/a').click()                                                //*CUSTOM XPATH*//
        // cy.xpath('//*[@id="txt_edit_tax"]').clear().type('4')
        // cy.xpath('//*[@id="edit_dt_effectivedt"]').click()
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[1]').select('Nov')
        // cy.xpath('//*[@id="ui-datepicker-div"]/div/div/select[2]').select('2023')
        // cy.xpath('//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[6]').click()
        // cy.xpath('//*[@id="select2-ed_selop-container"]').click()
        // cy.get('li[id$="-2"]').click()
        // cy.xpath('//*[@id="txt_edit_range_min"]').clear().type('3500')
        // cy.xpath('//*[@id="txt_edit_range_max"]').clear().type('10000')
        // cy.xpath('//*[@id="ed_radio_status_not_active"]').check()
        // cy.xpath('//*[@id="ed_radio_status_active"]').check()
        // cy.get('#edit_taxdet > .modal-body > :nth-child(4) > .col-md-12 > #btnSave').click()
        // cy.get('.swal2-confirm').click()





        //PAYSLIP
        //GENERAL & PASSWORD PROTECTION
        cy.get(':nth-child(7) > #payslip').click()
        // //cy.xpath('/html/body/div[4]/div/div[3]/div[1]/div[2]/div[1]/div[2]/button').click()         //*CUSTOM XPATH*//
        // cy.xpath('//div[@style="margin: 20px;"]/div/div[2]/button[@data-target="#payslipconfigmodel"]').click()                      //*CUSTOM XPATH*//
        // cy.xpath('//*[@id="edit_tax_calculation"]').uncheck().check()
        // cy.xpath('//*[@id="edit_exclude_payslip"]').check().uncheck()
        // cy.xpath('//*[@id="edit_arrear_breakup"]').uncheck().check()
        // cy.xpath('//*[@id="edit_salary_column"]').uncheck().check()
        // cy.xpath('//*[@id="edit_radio_ytd"]').check()
        // cy.xpath('//*[@id="edit_radio_gross_amt"]').check()
        // cy.xpath('//*[@id="edit_password_protect"]').uncheck().check()
        // cy.xpath('//*[@id="payslip_submit"]').click()
        // cy.get('.swal2-confirm').click()

        //PAYSLIP FIELDS
        cy.xpath('//div[@style="margin: 20px; "]/div/div/button').click()
        //cy.xpath('/html/body/div[4]/div/div[3]/div[1]/div[3]/div[1]/div[2]/button').click()
        cy.xpath('//*[@id="emp_code"]').wait(2000).click()
        cy.xpath('//*[@id="emp_code"]/i[1]').wait(2000).click()
        //*[@id="emp_code"]>address>dob>departmentid>designation_id>pan_card>bankname>account_number>ifs_code>pf_number>esi_number>uan_no>salary_date>payment_mode>
        //just add /i[1] after xpath to remove that particular button
        //cy.xpath('//*[@id="date_of_joining"]/i[1]')


    //LOGOUT
      //  cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})