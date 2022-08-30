it('login test',function(){

        
        cy.viewport(1280,720)
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login')
        cy.get(':nth-child(2) > .form-control').type('APPS000')
        cy.get(':nth-child(3) > .form-control').type('Apps@123')
        cy.get('#btnLogin').click()
        cy.get('.sidebar-user-material-menu > .legitRipple').click() //click on Username
        cy.get('#user-nav > .navigation > :nth-child(1) > .legitRipple').click() //click on myprofile
        cy.get(':nth-child(2) > .btn').click()  //click on compl
        
        cy.get('#select2-selcountry-container').click()
        cy.get('.select2-search__field').type('Ind')
        cy.get('#select2-selcountry-results').find('.select2-results__option').eq(1).contains('India').click();

        cy.get('#select2-selstate-container').click()
        cy.get('li[id$="22"]').click()
        // cy.get('.select2-search__field').type('G')
        // cy.get('#select2-selstate-results').find('.select2-results__option').eq(1).contains('Goa').click();

        cy.get('#select2-selcity-container').click()
        cy.get('li[id$="2707"]').click()
        //cy.get('.select2-search__field').type('Nav')

        //cy.get('#select2-selcity-results').find('.select2-results__option').eq(1).contains('Navi Mumbai').click();
        
        //cy.get('#select2-selcity-results').find('#select2-selcity-result-yk3t-2726').eq(1).contains('Navi Mumbai').click();

         //cy.get('#select2-selcountry-result-73al-101').click()

        //  cy.xpath("//span[@class='select2-results']/ul/li").each(($el,index,$list)=>{
        // //cy.get("//span[@class='select2-container select2-container--default select2-container--open']/span/span").each(($el,index,$list)=>{
        //     var contry = $el.text()
        //     if(contry=='India')
        //     {
        //         cy.wrap($el).click()
        //     }
        //  })
    })