


// it('test', function()
// {
// cy.viewport(1920,1080)
// cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
// cy.get(':nth-child(2) > .form-control').type('APPS000')
// cy.wait(3000)
// cy.get(':nth-child(2) > .form-control').should('be.visible').and('be.enabled')
// cy.wait(3000)
// cy.get(':nth-child(2) > .form-control').type('{selectAll}{backspace}')
// cy.wait(3000)

// cy.get(':nth-child(2) > .form-control').type('APPS000')
// cy.get(':nth-child(3) > .form-control').type('Apps@123')
// cy.get('#btnLogin').click()
// cy.wait(3000)

// cy.get(':nth-child(2) > .has-ul').click()
// cy.get(':nth-child(2) > .hidden-ul > :nth-child(2) > .legitRipple').click()

// cy.get('#select2-selEmp-container').contains('Employee')//.and('be.unchecked')


// })






//CALENDAR
 it('test', function()
{
    cy.viewport(1920,1080)
    cy.visit('https://phptravels.net/')
    cy.xpath('//*[@id="checkin"]').click()
    cy.xpath('//td[@class="day "]')
        .each(($el,index,$list)=>
        {
            var dateName = $el.text()
            if (dateName=='14')
            {
                cy.wrap($el).click()
            }
        })
}   )



//*[@id="checkin"]

//td[@class='day ']

//*[@id="fadein"]/div[3]/div[1]/table/tbody/tr[3]/td[5]








// cy.visit('https://demo.talenticks.meetcs.com/profiles/detailed_profile')
// //cy.wait(3000)        
// // cy.get('.col-md-12 > .form-group > :nth-child(3) > .choice > span > .styled').click()   //Yes
// // cy.wait(3000)
// // cy.get('.col-md-12 > .form-group > :nth-child(2) > .choice > span > .styled').click() //No
// //cy.wait(3000)
// //cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(3) > div > span > input").check()
// cy.wait(3000)
// //cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(2) > div > span > input").check()

// //Male & Female Done
// cy.get('.row > :nth-child(1) > .select2 > .selection > .select2-selection').click()
// cy.get('li[id$="-2"]').click()
// cy.get(':nth-child(5) > .row > :nth-child(2) > .select2 > .selection > .select2-selection').click()
// cy.get('li[id$="-2"]').click()  //-1> Single  ; -2 > Married ; -3 > Divorced


// //Anniversary date
// //cy.get('#txt_wedanniv').click()
// cy.get('.ui-datepicker-year').select('1997')
// cy.get('.ui-datepicker-month').select('Jan')
// cy.wait(3000)
// cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default').click().click() //path of particular date given by cypress
// cy.get('.icon').click({ multiple: true })
// cy.get('.swal2-confirm').click()
// // cy.get('.icon').click() //delete or dustbin button on add language form
// // cy.get('.swal2-confirm').click()    //select ok displayed msg
// // cy.get('.icon').click() //delete or dustbin button on add language form
// // cy.get('.swal2-confirm').click()    //select ok displayed msg
// // cy.get('.icon').click() //delete or dustbin button on add language form
// // cy.get('.swal2-confirm').click()    //select ok displayed msg
// cy.get(':nth-child(7) > .col-md-12 > .btn').click() //save & continue
// cy.viewport(1920,1080)
// cy.visit('https://demo.talenticks.meetcs.com/profiles/detailed_profile?act=personal_tab')
// })

// it('tesT2', function()
// { 
// cy.viewport(1920,1080)
// cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
// cy.get(':nth-child(2) > .form-control').type('APPS000')
// cy.get(':nth-child(3) > .form-control').type('Apps@123')
// cy.get('#btnLogin').click()
// cy.visit('https://demo.talenticks.meetcs.com/profiles/detailed_profile?act=edu_tab')


//     //cy.reload()
//     cy.get(':nth-child(4) > .has-ul').click()
//     cy.get(':nth-child(4) > ul > :nth-child(9) > .legitRipple').click()
//     cy.get('#dateRange').click()    //select date range
//     cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c3"]').click()
//     cy.get(':nth-child(5) > .today').click()
//     //ERROR as manually u cant use this function by entering dates
//     // cy.get('.daterangepicker-inputs > :nth-child(1) > .form-control').clear().type('01-06-2022').click()
//     // cy.get('.daterangepicker-inputs > :nth-child(2) > .form-control').clear().type('27-06-2022').click()
//     cy.get('.applyBtn').click()
//     cy.get('.buttons-excel > :nth-child(1)').click()    //for excel
    





// })