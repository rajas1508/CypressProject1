describe('Tutorialspoint Test', function () {
    // test case
    it("Scenario 1", function () {
       //URL launch
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       //handling prompt alert
        cy.wait(3000)
        cy.window().then(function(a){
          //stubbing prompt window
          cy.stub(a, "prompt").returns("abc");
          // click on Click for JS Prompt button
          cy.get(':nth-child(3) > button').click()

       });
    });
 });  