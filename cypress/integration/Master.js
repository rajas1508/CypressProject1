describe ('Master', () =>
{

    it('Master', () =>
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
                
                cy.xpath('//span[text()=" Master"]')                                                                        //Click 
                  .click()
                cy.log('Master menu button validated')     
        
                cy.wait(2000)


                
// //######## ADMIN #############//
//                 //DOCUMENTS
//                 cy.xpath('//span[text()=" Documents"]').click()
//                 cy.log('Documents button validated')
//                 cy.xpath('(//input[@id="documentname"])[1]').type('abcd')
//                 cy.xpath('//*[@id="mandat"]').select('Yes').wait(1000)
//                 cy.xpath('//button[text()=" Submit"]').click()
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)


                // //DESIGNATION
                // cy.xpath('(//span[text()=" Designation"])[1]').click()
                // cy.log('Designation button validated')
                // cy.xpath('(//input[@id="designationname"])[1]').type('abc')
                // cy.xpath('(//label[text()="Yes"])[1]').click().wait(1000)
                // cy.xpath('(//label[normalize-space()="No"])[1]').click().wait(1000)
                // cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
                // cy.get('.swal2-confirm').click()  
                // cy.xpath('//span[text()=" Excel"]').click().wait(1000)
                // cy.xpath('//span[text()=" PDF"]').click().wait(1000)
                // cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
                // cy.xpath('//button[text()=" Close"]').click().wait(1000)


                // //DEPARTMENT
                // cy.xpath('(//span[text()=" Department"])[1]').click()
                // cy.log('Department button validated')
                // cy.xpath('//div[@class="col-sm-6"]//input[@id="departmentname"]').type('abcd')
                // cy.xpath('//div[@class="col-sm-6"]//button[@id="btnSubmit"]').click().wait(1000)
                // cy.get('.swal2-confirm').click()  
                // cy.xpath('//span[text()=" Excel"]').click().wait(1000)
                // cy.xpath('//span[text()=" PDF"]').click().wait(1000)
                // cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
                // cy.xpath('//button[text()=" Close"]').click().wait(1000)       


                // //REIMBERSEMENT EXPENSE
                // cy.xpath('(//span[text()=" Reimbursement Expense"])[1]').click()
                // cy.log('Reimbursement Expense button validated')
                // cy.xpath('//input[@id="categoryname"]').type('abcd')
                // cy.xpath('//span[@id="select2-selIcon-container"]').click()
                // cy.get('li[id$="-3"]').click()
                // cy.xpath('//input[@id="txtDesc"]').type('abcd').wait(2000)
                // cy.xpath('//div[@class="col-sm-2"]//button[@id="btnSubmit"]').click().wait(1000)
                // cy.get('.swal2-confirm').click()  
                // cy.xpath('(//span[text()=" Excel"])[1]').click().wait(1000)
                // cy.xpath('(//span[text()=" PDF"])[1]').click().wait(1000)


                // cy.xpath('//a[normalize-space()="Sub Categories"]').click()
                // cy.xpath('//span[@id="select2-selCategory-container"]').click()
                // cy.get('li[id$="-2"]').click()
                // cy.xpath('//input[@id="txtSubCategory"]').type('abcd')
                // cy.xpath('//div[@class="col-sm-3"]//button[@id="btnSubmit"]').click()
                // cy.get('.swal2-confirm').click()
                // cy.xpath('//a[normalize-space()="Sub Categories"]').click()
                // cy.xpath('(//span[text()=" Excel"])[2]').click().wait(1000)
                // cy.xpath('(//span[text()=" PDF"])[2]').click().wait(1000)

                                
                
                // //SKILL SET
                // cy.xpath('(//span[text()=" Skill Set"])[1]').click()
                // cy.log('Skill Set button validated')
                // cy.xpath('//*[@id="select2-category-container"]').click()
                // cy.get('li[id$="-6"]').click()
                // cy.xpath('//input[@id="txtSkillset"]').type('abcd')
                // cy.xpath('//div[@id="skillsetDetails_wrapper"]//span[contains(text(),"Excel")]').click()
                // cy.xpath('//div[@id="skillsetDetails_wrapper"]//span[@class="icon-file-pdf"]').click()

 
                //HOLIDAY LIST
                cy.xpath('//span[normalize-space()="Holiday List"]').click()
                cy.log('Holiday List button validated')
                cy.xpath('//form[@id="frmHolidaylist"]//input[@id="holidaylistname"]').type('abcd')
                cy.xpath('//div[@class="form-group fg-line"]//input[@id="holidaylistdate"]').click()
                cy.xpath('//td[@class="today active start-date active end-date available"]').click()
                cy.xpath('//input[@id="holidaylisttype"]').check()
                cy.xpath('//input[@id="holidaylisttype1"]').check()
                cy.xpath('//form[@id="frmHolidaylist"]//button[@id="btnSubmit"]').click().wait(2000)
                cy.get('.swal2-confirm').click().wait(2000)
                
                
//                 //LEAVE TYPE
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)
  

                
//                 //LOAN MASTER
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)
 

// //######## HR #############//
//                 //LETTER FORMAT
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)
 

                
//                 //ASSET MANAGEMENT
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)
 
                
//                 //LEAVE TYPE
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)
 
                
//                 //LOAN MASTER
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)
 
                
//                 //CAR PARK
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)

                
//                 //PT MASTER
//                 cy.xpath('(//span[text()=" Designation"])[1]').click()
//                 cy.log('Designation button validated')
//                 cy.xpath('(//input[@id="designationname"])[1]').click()
//                 cy.xpath('(//label[text()="Yes"])[1]').check().wait(1000)
//                 cy.xpath('(//label[normalize-space()="No"])[1]').check().wait(1000)
//                 cy.xpath('//div[@class="col-sm-4"]//button[@id="btnSubmit"]').click().wait(1000)
//                 cy.get('.swal2-confirm').click()  
//                 cy.xpath('//span[text()=" Excel"]').click().wait(1000)
//                 cy.xpath('//span[text()=" PDF"]').click().wait(1000)
//                 cy.xpath('(//i[@class=" icon-pencil7"])[1]').click().wait(1000)
//                 cy.xpath('//button[text()=" Close"]').click().wait(1000)
 
 

    })

    it('Logout', () =>
    {
            //LOGOUT
                //cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})