describe ('HR SUPERADMIN LEAVE CONFIGURATION OFF DAYS', () =>
{

    it('HR SUPERADMIN LEAVE CONFIGURATION OFF DAYS', () =>
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
                cy.xpath('(//span[text()=" Off Days"])[1]')                                                                 //Click on off days menu and validate
                  .click()
                cy.log('Off Days menu button validated')

                cy.xpath('//*[@id="select2-selCompany-container"]').click()
                cy.get('li[id$="-1"]').click()

                cy.xpath('//input[@class="select2-search__field"and @placeholder="Select Company first"]').click()
                cy.get('li[id$="-30"]').click()

                cy.xpath('//input[@class="select2-search__field"and @placeholder="Select Branch first"]').click()
                cy.get('li[id$="-259"]').click()      //352,407,496,212,330

                cy.xpath('//*[@id="selectweekoff"]/div[2]/label/div').click() //sunday
                cy.xpath('//*[@id="selectweekoff"]/div[3]/label/div').click() //monday
                cy.xpath('//*[@id="selectweekoff"]/div[4]/label/div').click() //tuesday
                cy.xpath('//*[@id="selectweekoff"]/div[5]/label/div').click() //wednesday
                cy.xpath('//*[@id="selectweekoff"]/div[6]/label/div').click() //thursday
                cy.xpath('//*[@id="selectweekoff"]/div[7]/label/div').click() //friday
                cy.xpath('//*[@id="selectweekoff"]/div[8]/label/div').click() //saturday
                


                cy.window().then(function(p){
                  //stubbing prompt window
                  cy.stub(p, "prompt").returns();
                  // click on submit
                  cy.get('#btnSubmit').click()
               });

              
               cy.get('.swal2-confirm').click()


            //LOGOUT
                cy.get('.navbar-text > [href="https://beta.talenticks.meetcs.com/lauth/logout"]').click()
        
    })
        
})