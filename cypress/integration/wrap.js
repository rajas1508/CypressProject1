
//WRAP
// it('test', function()
// {
// cy.viewport(1920,1080)
// cy.visit('https://www.programsbuzz.com/user/login')
//     cy.get('#edit-name').then($ABC => {
//         cy.wrap($ABC).type('Moosten')
// })
// })



//WRAP
// describe('Wrap Command Use',()=> 
// {

//   it("Variable/Objects/Arrays Wrap",()=>
//             {
//    //Variable
//    let message = 'Red Or Blue'
//    cy.wrap(message).should('eq','Red Or Blue')
   
//    //Object
//    let Hero = {name: 'Minato'}
//    cy.wrap(Hero).should('have.property','name','Minato')

//    //Array
//    let Heroes = ['Minato','Naruto','Sarutobi','Orochimaru']
//    cy.wrap(Heroes).should('include','Orochimaru')
//             }
//     )
// }       )



//WRAP

it('test', function()
{
    cy.viewport(1920,1080)
    cy.visit('https://phptravels.net/')
    cy.xpath('//*[@id="checkin"]').find("tr > td").then(($td) => {
    cy.wrap($td).contains("14").invoke("wrap").parent().contains('//td[@class="day "]').click();
    })

}   )
