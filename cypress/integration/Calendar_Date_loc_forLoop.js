#txt_dob_table > tbody > :nth-child(1) > :nth-child(1) > .picker__day
#txt_dob_table > tbody > :nth-child(1) > :nth-child(2) > .picker__day
#txt_dob_table > tbody > :nth-child(1) > :nth-child(3) > .picker__day
#txt_dob_table > tbody > :nth-child(1) > :nth-child(4) > .picker__day
#txt_dob_table > tbody > :nth-child(1) > :nth-child(5) > .picker__day
#txt_dob_table > tbody > :nth-child(1) > :nth-child(6) > .picker__day
#txt_dob_table > tbody > :nth-child(1) > :nth-child(7) > .picker__day

#txt_dob_table > tbody > :nth-child(2) > :nth-child(1) > .picker__day
#txt_dob_table > tbody > :nth-child(2) > :nth-child(2) > .picker__day
#txt_dob_table > tbody > :nth-child(2) > :nth-child(3) > .picker__day
#txt_dob_table > tbody > :nth-child(2) > :nth-child(4) > .picker__day
#txt_dob_table > tbody > :nth-child(2) > :nth-child(5) > .picker__day
#txt_dob_table > tbody > :nth-child(2) > :nth-child(6) > .picker__day
#txt_dob_table > tbody > :nth-child(2) > :nth-child(7) > .picker__day

#txt_dob_table > tbody > :nth-child(3) > :nth-child(1) > .picker__day
#txt_dob_table > tbody > :nth-child(3) > :nth-child(2) > .picker__day
#txt_dob_table > tbody > :nth-child(3) > :nth-child(3) > .picker__day
#txt_dob_table > tbody > :nth-child(3) > :nth-child(4) > .picker__day
#txt_dob_table > tbody > :nth-child(3) > :nth-child(5) > .picker__day
#txt_dob_table > tbody > :nth-child(3) > :nth-child(6) > .picker__day
#txt_dob_table > tbody > :nth-child(3) > :nth-child(7) > .picker__day

#txt_dob_table > tbody > :nth-child(4) > :nth-child(1) > .picker__day
#txt_dob_table > tbody > :nth-child(4) > :nth-child(2) > .picker__day
#txt_dob_table > tbody > :nth-child(4) > :nth-child(3) > .picker__day
#txt_dob_table > tbody > :nth-child(4) > :nth-child(4) > .picker__day
#txt_dob_table > tbody > :nth-child(4) > :nth-child(5) > .picker__day
#txt_dob_table > tbody > :nth-child(4) > :nth-child(6) > .picker__day
#txt_dob_table > tbody > :nth-child(4) > :nth-child(7) > .picker__day

#txt_dob_table > tbody > :nth-child(5) > :nth-child(1) > .picker__day
#txt_dob_table > tbody > :nth-child(5) > :nth-child(2) > .picker__day
#txt_dob_table > tbody > :nth-child(5) > :nth-child(3) > .picker__day
#txt_dob_table > tbody > :nth-child(5) > :nth-child(4) > .picker__day
#txt_dob_table > tbody > :nth-child(5) > :nth-child(5) > .picker__day
#txt_dob_table > tbody > :nth-child(5) > :nth-child(6) > .picker__day
#txt_dob_table > tbody > :nth-child(5) > :nth-child(7) > .picker__day

#txt_dob_table > tbody > :nth-child(6) > :nth-child(1) > .picker__day
#txt_dob_table > tbody > :nth-child(6) > :nth-child(2) > .picker__day
#txt_dob_table > tbody > :nth-child(6) > :nth-child(3) > .picker__day
#txt_dob_table > tbody > :nth-child(6) > :nth-child(4) > .picker__day
#txt_dob_table > tbody > :nth-child(6) > :nth-child(5) > .picker__day
#txt_dob_table > tbody > :nth-child(6) > :nth-child(6) > .picker__day
#txt_dob_table > tbody > :nth-child(6) > :nth-child(7) > .picker__day

#txt_dob_table > tbody > :nth-child(7) > :nth-child(1) > .picker__day
#txt_dob_table > tbody > :nth-child(7) > :nth-child(2) > .picker__day
#txt_dob_table > tbody > :nth-child(7) > :nth-child(3) > .picker__day
#txt_dob_table > tbody > :nth-child(7) > :nth-child(4) > .picker__day
#txt_dob_table > tbody > :nth-child(7) > :nth-child(5) > .picker__day
#txt_dob_table > tbody > :nth-child(7) > :nth-child(6) > .picker__day
#txt_dob_table > tbody > :nth-child(7) > :nth-child(7) > .picker__day



    
    cy.get(':nth-child(2) > #uniform-fmlydet\[1\]\[chkisresiding\] > span > #fmlydet\[1\]\[chkisresiding\]').check()
    
    cy.get(':nth-child(2) > #uniform-fmlydet\[1\]\[chkisresiding\] > span > #fmlydet\[1\]\[chkisresiding\]').check()    //residing with u? Yes
    cy.get('.choice').find('#fmlydet[1][chkisresiding]').eq(1).contains('Y')
    cy.get(':nth-child(3) > #uniform-fmlydet\[1\]\[chkisresiding\] > span > #fmlydet\[1\]\[chkisresiding\]').check()    //residing with u? NO

IGNORE THIS cy.get('#select2-selsscgrd-results').find('.select2-results__option').eq(1).contains('CBGS').click(); //In case of percentage, ignore & process with next step
IGNORE THIS cy.get('#select2-selhscsplztn-results').find('.select2-results__option').eq(1).contains('Science').click()  //Not working with other streams
IGNORE THIS cy.get('#select2-selhscgrd-results').find('.select2-results__option').eq(1).contains('CBGS').click(); //In case of percentage, ignore & process with next step
IGNORE THIS cy.get('#select2-selgraddeg-results').find('.select2-results__option').eq(1).contains('B.A.').click();  //Not working with other streams
    cy.get('#select2-selSpecialization-results').find('li[id$="138"]').eq(1).contains('Malayalam with Journalism').click()
    cy.get('#select2-selSpecialization-results').find('li[role="treeitem"]').eq(1).contains('Agro Services').click();
    cy.get('#select2-selgradtype-container').click()
    cy.get('#select2-selgradtype-results').find('.select2-results__option').eq(1).contains('Full Time').click()   //for full time
    cy.get('#select2-selgradtype-results').find('li[id^="select2-selgradtype-result-"]').eq(1).contains('Part Time').click()    //for part time
   cy.get('#select2-selgradtype-results').find('li[id^="select2-selgradtype-result-"]').eq(1).contains('Distance / Correspondence Learning').click()    //for others not working
       cy.get('#select2-selgradgrd-results').find('.select2-results__option').eq(1).contains('CBGS').click();
cy.get('#select2-selpgraddeg-results').find('.select2-results__option').eq(1).contains('M.A.').click();
    cy.get('#select2-selpgraddeg-results').find('li[id^="select2-selpgraddeg-result-"]').eq(1).contains('M.Com.').click();
    cy.get('#select2-selpgraddeg-results').find('#select2-selpgraddeg-result-hlo5-13').eq(1).contains('M.Sc.').click();   //not working for others
    


    cy.get('input[value$="Y"]').parents('.col-md-4')
    cy.get('.col-md-4').children('.form-group')
    cy.get('input[name*="chkisrel"]').find('.styled chkisrel').eq(1).contains('Y').check();
    cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(3) > .choice > span > .styled').check()


        //Personal Details
        cy.get('#txt_national').clear().type('Himalaya')   //Nationality
        cy.get('#txt_religion').clear().type('Aghori')  //religion
        cy.get('#txt_nomname').clear().type('abc')  //nom name
        
        //nom dob
        cy.get('#txt_nomdob').click()
        
        cy.xpath('//*[@id="txt_nomdob_root"]/div/div/div/div/div[1]/select[1]').select('1952')
        //cy.get("#txt_nomdob_root > div > div > div > div > div.picker__header > select.picker__select--year").select('1803')  //By JS path
        cy.xpath('//*[@id="txt_nomdob_root"]/div/div/div/div/div[1]/select[2]').select('April')
        //cy.get("#txt_nomdob_root > div > div > div > div > div.picker__header > select.picker__select--month").select('August') //by JS path
        //cy.get('#txt_nomdob_table > tbody > :nth-child(4) > :nth-child(5) > .picker__day').click()
        cy.xpath('//*[@id="txt_nomdob_table"]/tbody/tr[3]/td[4]/div').click()
        cy.get("#txt_nomdob_table > tbody > tr:nth-child(3) > td:nth-child(7) > div")
    
        
        
        cy.get('#txt_nomrelatn').clear().type('abcd')           //Nominee relation
        cy.get('#txt_pannumbr').clear().type('BSHPP6926L')      //Pan
        cy.get('#txt_uannumbr').clear().type('123414529556')    //UAN Number
        
        //Blood group Selection
        cy.get('#select2-selbldgrp-container').click()
        cy.get('li[id$="5"]').click()
    
    
        
        //do you have relative in family
        cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(3)').click()   //No
        cy.wait(2000)
        cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(2)').click()   //Yes
        // cy.wait(2000)
        // cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(3) > .choice > span > .styled').check()    // No
        // cy.wait(2000)
        // cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(2) > .choice > span > .styled').check()    // yes
        // cy.wait(2000)
    
        cy.get('#txt_relname').clear().type('abcd')   //add name
        cy.get('#reldiv > :nth-child(2) > .form-group > .select2 > .selection > .select2-selection').click()    //selection of grade
        cy.get('li[id$="-7"]').click()          // - 6 for A & -7 for G
        cy.get('#reldiv > :nth-child(3) > .form-group > .select2 > .selection > .select2-selection').click()    //selection of dept
        cy.get('li[id$="-5"]').click()     //selection of dept
        //-1 E Comm; -2 Digital; -3 SEO; -4 Client Servicing; -5 Link Buildng; -6 Content; -7 Design; -8 Developement; -9 Marktng; -10 HR
        //-12 Sales; -13 SEM; -14 Social Media; -15 IT; -17 Digital SEO; -18 Digital Marketng; -19 SEO-OffPage; -20 Ecommerce; -21 GMB
    
    
    
    
    
    
        //are u suffering from any ailments
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(3)').click()   //No
        cy.wait(2000)
        cy.get('#PersonalDetails > .panel > :nth-child(4) > :nth-child(1) > .form-group > :nth-child(2)').click()   //Yes
        // cy.wait(2000)
        // cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(3) > .choice > span > .styled').check()    //no
        // cy.wait(2000)
        // cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(2) > .choice > span > .styled').check()    //yes
        // cy.wait(2000)
        cy.get('#txta_alimnt').clear().type('cold fever')
        
    
    
        
        //undergone any surgery
        cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(3)').click()   // No
        cy.wait(2000)
        cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(2)').click()   // yes
        // cy.wait(2000)
        // cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(3) > .choice > span > .styled').check()    //no
        // cy.wait(2000)
        // cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(2) > .choice > span > .styled').check()    //yes
        // cy.wait(2000)
        cy.get('#txta_surgery').clear().type('hand surgery')
    
    
        cy.get('#PersonalDetails > :nth-child(4) > .col-md-12 > .btn').click()  //save & continue   //contains('Information').
        
        // if (cy.get('.swal2-modal').contains('UAN No. Already Exists')) {
        //     cy.wait(2000)
        //     cy.get('.swal2-confirm').click()
        //     cy.get('#txt_uannumbr').clear().type('123456789458')    //UAN Number
        //     cy.get('#PersonalDetails > :nth-child(4) > .col-md-12 > .btn').click()
            
        // } else {}
            cy.log('information saved successfully')
            


    