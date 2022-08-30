
// describe ('drag and drop', () =>
// {
//     beforeEach(()=>
//     {
//         cy.visit('https://demo.talenticks.meetcs.com/lauth/login');
//         cy.get(':nth-child(2) > .form-control').type('APPS000');
//         cy.get(':nth-child(3) > .form-control').type('Apps@123');
//         cy.get('#btnLogin').click();
//     });

    it('drag one object to another place', () =>
        {   
        cy.visit('https://demo.talenticks.meetcs.com/lauth/login');
        cy.get(':nth-child(2) > .form-control').type('APPS000');
        cy.get('[placeholder="Password"]').type('Apps@123')
        //cy.get(':nth-child(3) > .form-control').type('Apps@123');
        cy.get('#btnLogin').click();
        cy.wait(4000)
       
        // cy.get('#li_exit_interview_stats > div > div.panel-heading').drag('body > div.page-container > div > div.content', 
        //                                                                     {
        //                                                                         source: { x: 120, y: 150 }, // applies to the element being dragged
        //                                                                         target: { position: 'right' }, // applies to the drop target
        //                                                                         force: true,     
        //                                                                     }
        //                                                                  );

            
        
        }
     );

     describe('Dragtest', () => {
        it('should dragndrop', () => {
          cy.visit('/yourpage')
      
          cy.get('.sourceitem').drag('.targetitem')
        })
      })

      describe('Dragtest', () => {
        it('should dragndrop', () => {
          cy.visit('/yourpage')
      
          cy.get('.sourceitem').drag('.targetitem', options)
        })
      })

      cy.get('.sourceitem').drag('.target', {
        source: { x: 100, y: 100 }, // applies to the element being dragged
        target: { position: 'left' }, // applies to the drop target
        force: true, // applied to both the source and target element
      })

      cy.get('.sourceitem').drag('.target').then((success) => {
        assert.isTrue(success)
      })

      cy.get('.sourceitem').drag('.target').then((success) => {
        assert.isFalse(success)
      })

      describe('Movetest', () => {
        it('should move', () => {
          cy.visit('/yourpage')
      
          cy.get('.sourceitem').move({ deltaX: 100, deltaY: 100 })
        })
      })

      describe('Movetest', () => {
        it('should move', () => {
          cy.visit('/yourpage')
      
          cy.get('.sourceitem').move({ deltaX: 100, deltaY: 100, ...options })
        })
      })

      
