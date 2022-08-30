it('test',function(){
cy.visit('https://app.com')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
// assuming this sends us back
// the campaign information
cy.wait(5000)
cy.request('https://app.com/me')
  .its('body.campaign')
  .then((campaign) => {
    // runs different cypress test code
    // based on the type of campaign
    return campaigns.test(campaign)
  })

})