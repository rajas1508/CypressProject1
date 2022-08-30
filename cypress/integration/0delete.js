//CHANEGE VALUES OF LINE 54 AND LINE 66 BEFORE RUNNING

describe ('ORG setting Profile Maker Config', () =>
{

    it('ORG setting Profile Maker Config', () =>
    {
        cy.visit('https://www.facebook.com')                                                  //visit URL
        cy.get('[data-testid=royal_email]').type('rajas.pujare1')
        cy.get('[data-testid=royal_pass]').type('Pujare@0208#')
        cy.get('[data-testid=royal_login_button]').click()


    })

})
