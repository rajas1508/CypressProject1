it('login test',function(){

        
    cy.viewport(1920,1080)
    
    cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
    cy.get(':nth-child(2) > .form-control').type('APPS000')
    cy.get(':nth-child(3) > .form-control').type('Apps@123')
    cy.get('#btnLogin').click()
    
    cy.visit('https://demo.talenticks.meetcs.com/profiles/detailed_profile?act=family_tab')

    
    cy.wait(6000)
    cy.get('.sidebar-user-material-menu > .legitRipple').click() //click on Username

    cy.get('#user-nav > .navigation > :nth-child(1) > .legitRipple').click() //click on myprofile
    cy.get(':nth-child(2) > .btn').click()  //click on compl
    


    //Checkbox Curr & Perm Add          
    // cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(3) > div > span > input").check()
    // cy.get("#BasicDetailsForm > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > label:nth-child(2) > div > span > input").check()

    
    //Male & Female Done
    //cy.get('.row > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    //cy.get('.select2-results__options').find('li[id^="select2-selgender"]').eq(1).contains('Male').click()
    
    //Marrital Status   Done
    // cy.get(':nth-child(5) > .row > :nth-child(2) > .select2 > .selection > .select2-selection').click()
    // cy.get('.select2-results__options').find('li[id^="select2-selmar"]').eq(1).contains('Single').click()

    
    //Anniversary date
    // cy.get('#txt_wedanniv').click()
    // cy.get('.ui-datepicker-year').select('1997')
    // cy.get('.ui-datepicker-month').select('Jan')
    // cy.wait(6000)
    // cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default').click().click() //path of particular date given by cypress
    
    // cy.get('#trlang1 > :nth-child(5) > .txt-slate > .icon').click() //delete or dustbin button on add language form
    // cy.get('.swal2-confirm').click()    //select ok displayed msg
    
    //this functionality has challege as ID becomes 1 after deleting one language if there are two
    //cy.get('#btn_add_language').click() //add button of language
    // cy.get('#langname1').type('Marathi')    //Enter Language
    // cy.get('#langread1').check()    //check read
    // cy.get('#langspeak1').check()   //check speak
    // cy.get('#langwrite1').check()   //check write 

    //cy.get(':nth-child(7) > .col-md-12 > .btn').click() //save & continue



    // //Personal Details
    // cy.get('#txt_national').type('Himalaya')   //Nationality
    // cy.get('#txt_religion').type('Aghori')  //religion
    // cy.get('#txt_nomname').type('abc')  //nom name
    // //nom dob pending

    // cy.get('#txt_nomrelatn').type('abcd')
    // cy.get('#txt_pannumbr').clear().type('BSHPP6926L')
    // cy.get('#txt_uannumbr').type('123456789456')
    
    // //Blood group Selection
    // cy.get('#select2-selbldgrp-container').click()
    // //cy.get('.select2-results__options').find('li[id^="select2-selbldgrp"]').eq(1).contains('O+').click()
    // cy.get('li[id$="5"]').click()


    
    //do you have relative in family
    //cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(2) > .choice > span > .styled').check()    // yes
    //cy.get('#txt_relname').type('abcd')   //add name
    
    //cy.get('#reldiv > :nth-child(2) > .form-group > .select2 > .selection > .select2-selection').click()    //selection of grade
    //cy.get('#select2-selrelgrd-results').find('.select2-results__option').eq(1).contains('A').click()   //selection of grade

    //cy.get('#reldiv > :nth-child(3) > .form-group > .select2 > .selection > .select2-selection').click()    //selection of dept
    //cy.get('#select2-selreldept-results').find('.select2-results__option').eq(1).contains('E Commerce').click()     //selection of dept
    //This selection has problem it selects only E Commerce properly
    ////cy.get('#select2-selreldept-results').find('.select2-results__option').eq(1).contains('SEO').click()     //selection of dept
    ////cy.get('#select2-selreldept-results').find('li[id^="select2-selreldept"]').eq(1).contains('E Commerce').click()     //selection of dept

    //cy.get('input[value$="Y"]').parents('.col-md-4')
    // cy.get('.col-md-4').children('.form-group')
    //cy.get('input[name*="chkisrel"]').find('.styled chkisrel').eq(1).contains('Y').check();
    //cy.get(':nth-child(3) > .col-md-4 > .form-group > :nth-child(3) > .choice > span > .styled').check()



    // //are u suffering from any ailments
    // cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(2) > .choice > span > .styled').check()    //yes
    // cy.get('#txta_alimnt').type('cold fever')
    // cy.get(':nth-child(4) > :nth-child(1) > .form-group > :nth-child(3) > .choice > span > .styled').check()    //no


    
    // //undergone any surgery
    // cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(2) > .choice > span > .styled').check()    //yes
    // cy.get('#txta_surgery').type('hand surgery')
    // cy.get(':nth-child(4) > .col-md-4 > .form-group > :nth-child(3) > .choice > span > .styled').check()    //no

    // cy.get('#PersonalDetails > :nth-child(4) > .col-md-12 > .btn').click()  //save & continue

    

// //FAMILY DETAILS
//     cy.get('#fmlyname1').type('abc')    //family name
//     cy.get('#select2-fmlyrel1-container').click()   //relationship
//     cy.get('#select2-fmlyrel1-results').find('.select2-results__option').eq(1).contains('Father').click()

//     cy.get('#select2-fmlyoccp1-container').click()  //occupation
//     cy.get('#select2-fmlyoccp1-results').find('.select2-results__option').eq(1).contains('Business').click()

//     //dob
//     cy.get('#fmlydob1').click()
//     cy.get('.ui-datepicker-month').select('Feb')
//     cy.get('.ui-datepicker-year').select('1978')
//     cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
    // cy.get('#fmlydob1_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--year').select('1965')
    // cy.wait(3000)
    // cy.get('#fmlydob1_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--month').select('January')
    // cy.wait(3000)
    // cy.get('#fmlydob1_table > tbody > :nth-child(2) > :nth-child(6) > .picker__day').click()
    //cy.get('#fmlydob1_table > tbody > :nth-child(3) > :nth-child(3) > .picker__day').click()
    //cy.get('#fmlydob1_table > tbody > :nth-child(3) > :nth-child(4) > .picker__day').click().click() //path of particular date given by cypress
    
   // cy.reload()


    //cy.wait(1500)

    
    // //dependent on you
    // cy.get(':nth-child(2) > .form-group > :nth-child(2) > .choice > span > .styled').check()    //dependent? yes
    // cy.get(':nth-child(2) > .form-group > :nth-child(3) > .choice > span > .styled').check()    //dependent? no


    //residing with u is pending due to dyanamic element
    // cy.get('.panel > :nth-child(1) > :nth-child(3) > :nth-child(3) > .form-group > :nth-child(2)').click()  //yes
    // cy.get('.panel > :nth-child(1) > :nth-child(3) > :nth-child(3) > .form-group > :nth-child(3)').click()  //no
    // cy.get('#fmlyaadhar_no1').clear().type('548787458749')  //enter adhar
    // //add member, delete, skip pending
    // cy.get(':nth-child(6) > :nth-child(1) > .btn').click()  //save & continue
    


    // //EDUCATIONAL DETAILS

    // //HIGH SCHOOL
    // cy.get('#txt_ssc_board').type('pune')   //board
    // cy.get('#txt_ssc_school').type('parle tilak')   //school name
    // //select grade system
    // cy.get('#select2-selsscgrd-container').click()
    // cy.get('li[id$="-1"]').click()
    // //enter grade
    // cy.get('#txt_ssc_grade').type('92.54')
    // //select from year
    // cy.get('#select2-selsscfrom-container').click()
    // cy.get('li[id$="1999"]').click()
    // //Select To year
    // cy.get('#select2-selsscto-container').click()
    // cy.get('li[id$="2009"]').click()
    // //Save & continue
    // cy.get('#edudetssc > :nth-child(2) > .col-md-12 > .btn').click()

    // //SECONDARY SCHOOL
    // cy.get('#edunavtabs > :nth-child(2) > .legitRipple').click()
    // cy.get('#txt_hsc_board').type('mumbai')
    // cy.get('#txt_hsc_college').type('sathaye')
    // cy.get('#select2-selhscsplztn-container').click()
    // cy.get('li[id$="-4"]').click()
    
    // cy.get('#select2-selhscgrd-container').click()
    // cy.get('li[id$="-2"]').click()
    // cy.get('#txt_hsc_grade').type('54.15')
    // //select from year
    // cy.get('#select2-selhscfrom-container').click()
    // cy.get('li[id$="2009"]').click()
    // //Select To year
    // cy.get('#select2-selhscto-container').click()
    // cy.get('li[id$="2011"]').click()
    // //Next degree
    // cy.get('#edudethsc > :nth-child(2) > .col-md-12 > .btn').click()
    

    // //GRADUATION
    // cy.get('#edunavtabs > :nth-child(3) > .legitRipple').click()
    // cy.get('#txt_grad_board').type('Mumbai University')
    // cy.get('#txt_grad_college').type('FAMT')
    // cy.get('#select2-selgraddeg-container').click() //click course
    // cy.get('li[id$="-1"]').click()
    // cy.get('#select2-selSpecialization-container').click()
    // cy.get('li[id$="-5"]').click()         
    // cy.get('#select2-selgradtype-container').click()
    // //cy.get('#edudetgrad > .panel > :nth-child(2) > :nth-child(3) > .form-group > .select2 > .selection > .select2-selection').click()
    // cy.get('li[id$="-3"]').click()  
    
    // cy.get('#select2-selgradgrd-container').click()
    // cy.get('li[id$="-1"]').click()
    // cy.get('#txt_grad_grade').type('61.2')
    // //select from year
    // cy.get('#select2-selgradfrom-container').click()
    // cy.get('li[id$="2011"]').click()
    // //Select To year
    // cy.get('#select2-selgradto-container').click()
    // cy.get('li[id$="2015"]').click()
    // cy.get('#edudetgrad > :nth-child(2) > .col-md-12 > .btn').click()   //click on next degree




    // //POST GRADUATION STARTS   ***********PERFECT FORM, REFER THIS TO REMAINING OTHER FORM*****************
    // cy.get('#edunavtabs > :nth-child(4) > .legitRipple').click()
    // cy.get('#txt_pgrad_board').type('ABC')
    // cy.get('#txt_pgrad_college').type('XYZ')
    // cy.get('#select2-selpgraddeg-container').click()
    // cy.get('li[id$="-14"]').click()
    // cy.get('#select2-selpSpecialization-container').click()
    // cy.get('li[id$="-1281"]').click()
    // cy.get('#select2-selpgradtype-container').click()
    // cy.get('li[id$="-3"]').click()
    // cy.get('#select2-selpgradgrd-container').click()
    // cy.get('li[id$="-1"]').click()
    // cy.get('#txt_pgrad_grade').type('52.3')
    // cy.get('#select2-selpgradfrom-container').click()
    // cy.get('li[id$="2015"]').click()
    // cy.get('#select2-selpgradto-container').click()
    // cy.get('li[id$="2017"]').click()
    // cy.get('#edudetpg > :nth-child(2) > :nth-child(1) > .btn').click()  //
    // //POST GRADUATION ENDS   ***********PERFECT FORM, REFER THIS TO REMAINING OTHER FORM*****************




    // //ACADEMIC PROJECT
    // cy.get('#btn_add_aca').click()
    // cy.get('#acacompany1').type('testing')
    // cy.get('#acaprojname1').type('ABCD')
    // cy.get(':nth-child(1) > :nth-child(4) > .form-group > .select2 > .selection > .select2-selection > .select2-selection__rendered').click()
    // cy.get('#select2-acatech1-results > :nth-child(1)').click()
    // cy.get(':nth-child(1) > :nth-child(4) > .form-group > .select2 > .selection > .select2-selection > .select2-selection__rendered').click()
    // cy.get('#select2-acatech1-results > :nth-child(2)').click()
    // cy.get(':nth-child(1) > :nth-child(4) > .form-group > .select2 > .selection > .select2-selection > .select2-selection__rendered').click()
    // cy.get('#select2-acatech1-results > :nth-child(3)').click()
    // cy.get('#acaduration1').type('8')
    // cy.get('#acacontri1').type('Developing a project plan, ')
    //                     .type('Managing deliverables according to the plan{enter}')  
    //                     .type('Leading and managing the project team, ')
    //                     .type('Determining the methodology used on the project{enter}')
    //                     .type('Assigning tasks to project team members, ')
    //                     .type('Communicating with upper management, ')    
    //                     .type('Establishing a project schedule and determining each phase')
    // cy.get('#aca_submit').click()




    // //CERTIFICATIONS
    // cy.get('#btn_add_cert').click()
    // cy.get('#certtitle1').type('CCNA')
    // cy.get('#certinsti1').type('RST FORUM')
    // cy.get('#certdesc1').type('CCNA ROUTING, CCNA SWITCHING, Network Fundamentals, WAN Technologies, Infrastructure Services, Infrastructure Security')
    // cy.get('#certduration1').type('6')
    // cy.get('#select2-certtenure1-container').click()
    // cy.get('li[id$="-3"]').click()
    // cy.get('#certcmpltd1').click()
    // cy.get('.ui-datepicker-month').select('Apr')
    // cy.get('.ui-datepicker-year').select('2019')
    // cy.get(':nth-child(1) > :nth-child(3) > .ui-state-default').click()
    // //if validity
    // cy.get('#certvalidtill1').click()
    // cy.get('#certvalidtill1_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--year').select('2021')
    // cy.get('#certvalidtill1_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--month').select('April')
    // cy.get('#certvalidtill1_table > tbody > :nth-child(3) > :nth-child(5) > .picker__day').click()
    // cy.get('#lifetime1').check()
    // cy.get('#CertificateDetailsForm > :nth-child(7) > :nth-child(1) > .btn').click()


    

    // //EXTRA CURRICULAR
    // cy.get('#btn_add_extra_curicular').click()
    // cy.get('#addextradetails > .panel').clear().type('A. playing volleyball B. participation in techfest C. singing D. NCC')
    // cy.get('#ExtraDetailsForm > :nth-child(5) > :nth-child(1) > .btn').click()
    

    // //EMERGENCY CONTACT
    // cy.get('#txt_emrpname').clear().type('BABURAO')
    // cy.get('#txt_emrprelation').clear().type('BAJUWALA RIGHT')
    // cy.get('#txt_emrpaddr').clear().type('MERE GHAR KE RIGHT SIDE ME')
    // cy.get('#txt_emrpcntctno').clear().type('8282828282')
    // cy.get('#txt_emrsname').clear().type('GANPAT')
    // cy.get('#txt_emrsrelation').clear().type('BAJUWALA LEFT')
    // cy.get('#txt_emrsaddr').clear().type('MERE GHAR KE LEFT SIDE ME')
    // cy.get('#txt_emrscntctno').clear().type('7082899109')
    // cy.get('#EmergencyForm > :nth-child(4) > .col-md-12 > .btn').click()



    // //REFERENCES
    // cy.get('#btn_add_ref').click()
    // cy.get('#refname1').type('VISHAL JADHAV')
    // cy.get('#refdesgntn1').type('SENIOR SOFTWARE TEST ENGINEER')
    // cy.get('#reforgname1').type('MEETCS')
    // cy.get('#refmobno1').type('8584645789')
    // cy.get('#refemailid1').type('vishal.j@gmail.com')
    // cy.get(':nth-child(5) > .col-md-12 > .btn').click()

    // //saved msg
    // cy.get('.swal2-confirm').click()
    // cy.get('.navbar-text > [href="https://demo.talenticks.meetcs.com/lauth/logout"]').click()







    


    // //Save & Continue
    // cy.get(':nth-child(7) > .col-md-12 > .btn').click()
    // cy.screenshot()
    // cy.get('.swal2-confirm').click()


    
    //cy.get("#BasicDetailsForm > div:nth-child(5) > div > div:nth-child(2) > span > span.selection > span").click()
    //cy.get('#select2-selmar-container').click()
    //cy.get('#select2-selmar-result-yb31-1').click()
    //cy.get('li[id$="3"]').click()
    
   

    // cy.get('#txt_dob').click()
    // cy.get('#txt_dob_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--year').select('1936')
    // cy.wait(6000)
    // cy.get('#txt_dob_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > .picker__header > .picker__select--month').select('January')
    // cy.wait(6000)
    //cy.get('div[aria-label^="16"]').select('16')
    //cy.get("#txt_dob_table > tbody > tr:nth-child(4) > td:nth-child(3) > div").click()  //js path from inspector
    //cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(7) > .picker__day').click().click() //path of particular date given by cypress
    //cy.get('.picker__day picker__day--infocus').find('.select2-results__option').eq(1).contains('Goa').click();
    

    //cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(5) > .picker__day').click()
    //cy.get('#txt_dob_table > tbody > :nth-child(3) > :nth-child(1) > .picker__day').click()

    
    
})