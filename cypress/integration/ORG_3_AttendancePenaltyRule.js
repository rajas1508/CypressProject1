//CHANEGE VALUES OF LINE 54 AND LINE 66 BEFORE RUNNING

describe ('ORG setting Attendance Penalty Rule', () =>
{

    it('ORG setting Attendance Penalty Rule', () =>
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

        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[3]/ul/li[4]/a')                                         //CLICK ON ATTENDANCE PENALTY RULE
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'legitRipple')
          .click()
        cy.log('ATTENDANCE PENALTY RULE menu button validated')  
        cy.wait(2000)

        //UNAUTHORIZED ABSENSE
        cy.xpath('//*[@id="select2-unauthorized_deduct-container"]').click()                                        //click on deduct > Days
        cy.get('li[id$="-0.5"]').click()                                                                            //select value from dropdown -0.5 & -1
        cy.xpath('//*[@id="select2-unauthorized_leavetype-container"]').click()                                     //click on deduct > as leave type
        cy.get('li[id$="-1"]').click()                                                                              //select value from dropdown -1, -3, -4 & -5
        cy.xpath('//*[@id="unauthorized_notify_y"]').check()                                                        //click on yes for notify
        cy.xpath('//*[@id="unauthorized_notify_n"]').check()                                                        //click on no for notify
        cy.xpath('//*[@id="unauthorized_status_y"]').check()                                                        //click on yes for Active
        cy.xpath('//*[@id="unauthorized_status_n"]').check()                                                        //click on no for Active

        //FULL DAY MINIMUM HOURS
        cy.xpath('//*[@id="select2-full_deduct-container"]').click()
        cy.get('li[id$="-0.5"]').click()                                                                            //select value from dropdown -0.5 & -1
        cy.xpath('//*[@id="select2-full_leavetype-container"]').click()
        cy.get('li[id$="-1"]').click()                                                                              //select value from dropdown -1, -3, -4 & -5
        cy.xpath('//*[@id="full_notify_y"]').check()                                                                //click on yes for notify
        cy.xpath('//*[@id="full_notify_n"]').check()                                                                //click on no for notify
        cy.xpath('//*[@id="full_status_y"]').check()                                                                //click on yes for Active
        cy.xpath('//*[@id="full_status_n"]').check()                                                                //click on no for Active

        //ON TIME CRIETERIA
        cy.xpath('//*[@id="after_out_time"]').clear().type('4')
        cy.xpath('//*[@id="end_time"]').clear().type('54')
        cy.xpath('//*[@id="select2-out_time_deduct-container"]').click()                                                    //click on deduct > Days
        cy.get('li[id$="-0.5"]').click()                                                                                    //select value from dropdown -0.5 & -1
        cy.xpath('//*[@id="select2-out_time_leavetype-container"]').click()
        cy.get('li[id$="-1"]').click()                                                                                      //select value from dropdown -1, -3, -4 & -5
        cy.xpath('//*[@id="out_time_notify_y"]').check()                                                                    //click on yes for notify
        cy.xpath('//*[@id="out_time_notify_n"]').check()                                                                    //click on no for notify
        cy.xpath('//*[@id="out_time_status_y"]').check()                                                                    //click on yes for Active
        cy.xpath('//*[@id="out_time_status_n"]').check()                                                                    //click on no for Active


        //HALF DAY MINIMUM HOURS
        cy.xpath('//*[@id="penaltyrule"]/div/div/div[1]/div[2]/fieldset/div[1]/div/div/div[1]/span/span[1]/span').click()   //click on deduct > Days
        cy.get('li[id$="-0.5"]').click()                                                                                    //select value from dropdown -0.5 & -1
        cy.xpath('//*[@id="select2-half_leavetype-container"]').click()
        cy.get('li[id$="-1"]').click()                                                                                  //select value from dropdown -1, -3, -4 & -5
        cy.xpath('//*[@id="half_notify_y"]').check()                                                                    //click on yes for notify
        cy.xpath('//*[@id="half_notify_n"]').check()                                                                    //click on no for notify
        cy.xpath('//*[@id="half_status_y"]').check()                                                                    //click on yes for Active
        cy.xpath('//*[@id="half_status_n"]').check()                                                                    //click on no for Active
        

        //IN TIME CRITERIA
        cy.xpath('//*[@id="after_in_time"]').clear().type('2')   
        cy.xpath('//*[@id="start_time"]').clear().type('3')                                                            
        cy.xpath('//*[@id="select2-in_time_deduct-container"]').click()                                                 //click on deduct > Days
        cy.get('li[id$="-0.5"]').click()                                                                                //select value from dropdown -0.5 & -1
        cy.xpath('//*[@id="select2-half_leavetype-container"]').click()
        cy.get('li[id$="-1"]').click()                                                                                  //select value from dropdown -1, -3, -4 & -5
        cy.xpath('//*[@id="half_notify_y"]').check()                                                                    //click on yes for notify
        cy.xpath('//*[@id="half_notify_n"]').check()                                                                    //click on no for notify
        cy.xpath('//*[@id="half_status_y"]').check()                                                                    //click on yes for Active
        cy.xpath('//*[@id="half_status_n"]').check()                                                                    //click on no for Active


        //GENERAL
        cy.xpath('//*[@id="run_date"]').clear().type('14')
        cy.xpath('//*[@id="from_date"]').click()
        cy.xpath('//*[@id="from_date_root"]/div/div/div/div/div[1]/select[1]').select('2022')
        cy.xpath('//*[@id="from_date_root"]/div/div/div/div/div[1]/select[2]').select('July')
        cy.xpath('//*[@id="from_date_table"]/tbody/tr[4]/td[6]/div').click()                                    

        cy.xpath('//*[@id="btnSubmit"]').click()
        cy.get('.swal2-confirm').click()


    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})
