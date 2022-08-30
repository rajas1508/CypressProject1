it('login test',function(){

        
    cy.viewport(1280,720)
    cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
    cy.get(':nth-child(2) > .form-control').type('APPS000')
    cy.get(':nth-child(3) > .form-control').type('Apps@123')
    cy.get('#btnLogin').click()
    cy.get('.sidebar-user-material-menu > .legitRipple').click() //click on Username
    cy.get('#user-nav > .navigation > :nth-child(1) > .legitRipple').click() //click on myprofile
    cy.get(':nth-child(2) > .btn').click()  //click on compl

    cy.get('#txt_dob').click()
    cy.get('#txt_dob_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--year').select('1936')
    cy.wait(6000)
    cy.get('#txt_dob_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--month').select('January')
    cy.wait(6000)
    //cy.get('div[aria-label^="16"]').select('16')
    //cy.get("#txt_dob_table > tbody > tr:nth-child(4) > td:nth-child(3) > div").click()  //js path from inspector
    cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(7) > .picker__day').click().click() //path of particular date given by cypress
    //cy.get('.picker__day picker__day--infocus').find('.select2-results__option').eq(1).contains('Goa').click();
    

    //cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(5) > .picker__day').click()
    //cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(1) > .picker__day').click()

    
    
})