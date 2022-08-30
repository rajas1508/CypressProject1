//CHANEGE VALUES OF LINE 54 AND LINE 66 BEFORE RUNNING (160, 163 WILL HAVE CHANGES)

describe ('ORG setting Profile Maker Config', () =>
{

    it('ORG setting Profile Maker Config', () =>
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
        
        cy.xpath('//a[@title="ORG Setting" and @href="#/"]')                                                  //Click on ORG Setting menu and validate
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'has-ul legitRipple')
          .click()
        cy.log('ORG Setting menu button validated')    

        
        cy.xpath('//*[@id="ttsidebar"]/div/div[2]/div/ul/li[2]/ul/li[6]/a')                                         //CLICK ON ORGANIZATION
          .should('have.attr','title','ORG Setting')
          .and('have.class', 'legitRipple')
          .click()
        cy.log('PROFILE MAKER CONFIG menu button validated')  
        cy.wait(2000)


        //GENERAL INFO//
        cy.xpath('//*[@id="add_signatory"]').click()
        cy.xpath('//*[@id="select2-signatory_names-container"]').click()                                            //CLICK DROPDOWN OF SIGNATORY NAME
        cy.get('li[id$="-1"]').click()                                                                              //SELECT ONE NAME FROM DROPDOWN
        const p = 'bill.png'
        cy.get('#signatory_sign').attachFile(p)
        cy.get('#signatory_not_active').click()                                                           //
        cy.get('#signatory_submit').click()
        cy.get('.swal2-confirm').click()

        cy.get('.icon-pencil7').click()                                     //click on edit button
        cy.xpath('//*[@id="signatory_sign"]').attachFile(p)                 //click on attach signatury
        cy.xpath('//*[@id="radio_signatory_not_active"]').check()           //click on not active
        cy.xpath('//*[@id="radio_signatory_active"]').check()               //check on Active
        cy.get('#signatory_submit').click()                                 //click on submit
        cy.get('.swal2-confirm').click()                                    //click ok on msg
        cy.xpath('//*[@id="createsignatory"]/div/div[4]/button[1]').click() //click on close

        cy.get('#add_bank').click()                                         //click on  add bank account
        cy.get('#select2-bank_name-container').click()                      //click on bank name
        cy.get('li[id$="-1"]').click()                                      //select bannk from dropdown
        cy.get('#account_number').type('54815471')                          //add account number                                   
        cy.get('#ifsc_code').type('HDFC0086')                               //add ifcs code
        cy.get('#branch').type('Andheri')                                   //add branch name
        cy.get('#corporate_id').type('ABC452')                              //add corporate id
        cy.xpath('//*[@id="radio_bank_not_active"]').check()                //check on Active
        cy.xpath('//*[@id="radio_bank_active"]').check()                    //check on Not Active
        cy.get('#bank_submit').click()                                      //click on submit
        cy.get('.swal2-confirm').click()                                    //click on okay
        cy.xpath('//*[@id="createbank"]/div[2]/button[1]').click()          //click on close





        //COMPANY INFO//
        cy.xpath('//*[@id="company_info"]/a').click()                                          //click on company info
        //EDIT
        cy.xpath('//*[@id="1"]/td/a').click().wait(2000)                                       //click on edtit button
        cy.get('#edit_company_logo').attachFile(p)                                             //attach file for company logo
        cy.xpath('//*[@id="uniform-edit_company_logo"]/span[2]').attachFile(p)                 //click on attach
        cy.xpath('//*[@id="edit_company_name"]').clear().type('ABCD')                          //EDIT COMPANY NAME
        cy.xpath('//*[@id="select2-edit_business_type-container"]').click()                    //CLICK ON BUSINESS TYPE & SELECT FROM DROPDOWN
        cy.get('li[id$="-1"]').click()
        cy.get('#edit_company_description').clear().type('ALPHA TECHNOLOGIES')                 //EDIT COMPANY DETAILS
        cy.get('#edit_company_email').clear().type('abc@gmail.com')                            //EDIT COMPANY EMAIL
        cy.get('#edit_company_number').clear().type('9082335464')                              //EDIT COMPANY NUMBER
        cy.get('#edit_company_address').clear().type('THENE EK GAO')                           //EDIT COMPANY ADDRESS
        cy.get('#edit_company_website').clear().type('https://www.ab.com')                     //EDIT COMPANY WEBISITE
        cy.get('#edit_company_cin').clear().type('UP548875AO5485')                             //EDIT COMPANY CIN NUMBER
        //**INCORPORATION DATE FIELD IS DISABLED**//
        cy.get('#edit_check_in_time').type('09:30')                                            //EDIT CHECK IN TIME
        cy.get('#edit_check_out_time').type('18:30')                                           //EDIT CHECK OUT TIME
        cy.get('#edit_half_day_shift_hours').type('6')                                         //EDIT HALF DAY HOURS
        cy.get('#edit_full_day_shift_hours').type('9')                                         //EDIT FULL DAY HOURS
        cy.xpath('//*[@id="editCompany"]/div/div/form/div[2]/button[2]').click()               //SUMBIT
        cy.get('.swal2-confirm').click()                                                       //OKAY
        cy.xpath('//*[@id="editCompany"]/div/div/form/div[2]/button[1]').click()               //CLICK OM CLOSE

        //ADD COMPANY INFO
        cy.xpath('//*[@class="page-content"]/div[3]/div/div/button').click().wait(2000)        //click on edtit button
        cy.get('#company_logo').attachFile(p)                                                  //attach file for company logo
        cy.xpath('//*[@id="uniform-company_logo"]/span[2]').attachFile(p)                      //click on attach
        cy.xpath('//*[@id="company_name"]').clear().type('ABCD')                               //EDIT COMPANY NAME
        cy.xpath('//*[@id="select2-business_type-container"]').click()                         //CLICK ON BUSINESS TYPE & SELECT FROM DROPDOWN
        cy.get('li[id$="-1"]').click()
        cy.get('#company_description').clear().type('ALPHA TECHNOLOGIES')                      //EDIT COMPANY DETAILS
        cy.get('#company_email').clear().type('abc@gmail.com')                                 //EDIT COMPANY EMAIL
        cy.get('#company_number').clear().type('9082335464')                                   //EDIT COMPANY NUMBER
        cy.get('#company_address').clear().type('THENE EK GAO')                                //EDIT COMPANY ADDRESS
        cy.get('#company_website').clear().type('https://www.ab.com')                          //EDIT COMPANY WEBISITE
        cy.get('#company_cin').clear().type('UP548875AO5485')                                  //EDIT COMPANY CIN NUMBER
        //**INCORPORATION DATE FIELD IS DISABLED**//
        cy.get('#check_in_time').type('09:30')                                                 //EDIT CHECK IN TIME
        cy.get('#check_out_time').type('18:30')                                                //EDIT CHECK OUT TIME
        cy.get('#half_day_shift_hours').type('6')                                              //EDIT HALF DAY HOURS
        cy.get('#full_day_shift_hours').type('9')                                              //EDIT FULL DAY HOURS
        cy.xpath('//*[@id="addCompany"]/div/div/form/div[2]/button[2]').click()                //SUMBIT
        cy.get('.swal2-confirm').click()                                                       //OKAY
        cy.xpath('//*[@id="addCompany"]/div/div/form/div[2]/button[1]').click()                //CLICK OM CLOSE

        




       // LEGAL ENTITIES IS NOT WORKING CURRRENTLY//
        //cy.xpath('//*[@id="legal"]').click()                                //click on legal entities





        //BRANCH//
        cy.xpath('//*[@id="navbar-second"]/div/ul/li[4]/a').click()                              //CLICK ON BRANCH
        //ADD BUTTON
        cy.xpath('//*[@class="content"]/div/div/div/div[2]/a/button').click()                    //CLICK ON ADD
        cy.xpath('//*[@id="txt_location"]').type('AFGANISTHAN')                                  //ENTER LOCATION
        cy.xpath('//*[@id="addlocation"]/div[1]/div[2]/div/span/span[1]/span').click()           //SELECT TIMEZONE  "-24 for india"
        cy.get('li[id$="-22"]').click()
        cy.xpath('//*[@id="txt_address1"]').type('osamabin laden ka adda')
        cy.xpath('//*[@id="txt_address2"]').type('pakistan ke bagal me')
        cy.xpath('//*[@id="txt_email"]').type('osama@tumJoEkAtankwadHo.com')
        cy.xpath('//*[@id="select2-selcountry-container"]').click()                               //SELECT COUNTRY "-101> INDIA"
        cy.get('li[id$="-101"]').click()
        cy.xpath('//*[@id="select2-selstate-container"]').click()                                 //SELECT STATE "-22 > MAHARASHTRA"
        cy.get('li[id$="-22"]').click()
        cy.xpath('//*[@id="addlocation"]/div[3]/div[3]/div/span').click()                         //SELECT CITY "2707> MUMBAI" & "2726 NAVI MUMBAI"
        cy.get('li[id$="-2707"]').click() 
        cy.xpath('//*[@id="txt_zip"]').type('400069')
        cy.xpath('//*[@id="addlocation"]/div[4]/div[1]/div/span/span[1]/span').click()            //SELECT COMPANY FROM DROPDOWN
        cy.get('li[id$="-1"]').click()
        cy.get('#allow_check_in_y').check()                                                       //CHECKBOX YES FOR CHECK IN
        cy.get('#allow_check_in_n').check()                                                       //CHECKBOX NO FOR CHECK IN
        cy.get('#radio_status_not_active').check()                                                //CHECKBOX FOR NON ACTIVE
        cy.get('#radio_status_active').check()                                                    //CHECKBOX FOR ACTIVE
        cy.xpath('//*[@id="addlocation"]/div[5]/div[2]/div/button').click()                       //CLICK ON SAVE
        cy.get('.swal2-confirm').click()
        //EDIT
        cy.xpath('//*[@id="31"]/td[5]/a[1]').click()                                              //CLICK ON EDIT BUTTON
        cy.xpath('//*[@id="editlocation"]/div[5]/div[2]/div/button').click()                      //CLICK ON UPDATE
        cy.wait(2000)
        cy.get('.swal2-confirm').click()
        //DELETE
        cy.xpath('//*[@id="34"]/td[5]/a[2]').click()                                              //CLICK ON DELETE BUTTON
        cy.xpath('/html/body/div[5]/div/div[10]/button[1]').click()                               //CLICK ON DELETE BUTTON
        cy.wait(2000)
        cy.get('.swal2-confirm').click()



        //BANDS
        //ADD NEW
        cy.xpath('//*[@id="bands"]/a').click()                                                      //click on bands
        cy.get('#txt_name').type('MY NAME IS KHAN')                                                 //type name in field
        cy.get('#txt_description').type('Sharp Shooter')                                            //type designation
        cy.get('#active').select('Active')                                                          //SELECT ACTIVE
        cy.xpath('//*[@id="addband"]/div/div[4]/button').click()                                    //CLICK ON SAVE
        cy.get('.swal2-confirm').click()
        //EDIT EXISTING
        cy.xpath('//*[@id="11"]/td[5]/a[1]').click()                                                //CLICK ON EDIT BUTTON
        cy.xpath('//*[@id="addband"]/div/div[4]/button').click()                                    //CLICK ON UPDATE
        cy.get('.swal2-confirm').click()
        //CLICK ON DELETE/REMOVE BUTTON
        cy.xpath('//*[@id="12"]/td[5]/a[2]/i').click()   
        cy.get('.swal2-confirm').click().wait(1000)
        cy.get('.swal2-confirm').click()


        
        

        //CLICK ON PAY GRADES
        cy.xpath('//*[@id="pay_grades"]/a').click()                           //click on pay grades
        cy.get('#gradename').type('TESTer1')
        cy.get('#startrange').type('220000')
        cy.get('#endrange').type('5354000')
        cy.get(':nth-child(4) > #btnSubmit').click()
        //cy.get('//button[text()="Submit"]').click()
        cy.get('.swal2-confirm').click()

        cy.xpath('//*[@id="15"]/td[6]/a').click()
        cy.get('.modal-footer > #btnSubmit').click()
        cy.get('.swal2-confirm').click()



    //LOGOUT
        cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()

    })

})
