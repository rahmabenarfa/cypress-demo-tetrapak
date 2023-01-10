///<reference types="cypress"/>

//it('Tetrapak', function(){

  //  describe ('TETRAPAK TEST',function() {
   
  
   
    it ('login credenziali corrette',function() {   //TEST1:LOGIN

       // cy.getCookies()
       cy.session('login', () => {

        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal')
  
        

    cy.get('.login-pf-page')
    cy.contains('Username o email')
    cy.contains('Password')
   
    cy.get('#username').type('testaccount')
    cy.get('#password').type('userT@1234')
     
    cy.get('#togglePassword').click()  
    cy.contains('Password dimenticata?')


    cy.wait(1000)
   
    cy.contains('Accedi').click()

    cy.contains('Welcome')

    //cy.url().should('contain', '/login-successful')

    // cy.contains('Available Applications')
      //  cy.contains('Material Modeler')
      //  cy.contains('Open App').click()
      //  cy.contains('Material Modeler')
       })
     })


    it.skip ('login password corretta,username sbagliata',function() {   //TEST2:LOGIN

        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal')
  
       // cy.getCookies()
       // cy.contains('Username o email')
       // cy.contains('Password')
    
         cy.get('#username').type('testaccount1')
         cy.get('#password').type('userT@1234')
        
         //cy.get('#togglePassword').click()
    
        cy.wait(1000)
    
         cy.get('#kc-login').click()

         cy.contains('Username o password non validi')
    
     })
    

    it ('login password sbagliata, username corretta',function(){
       
        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal')
  
          //  cy.contains('Username o email')
          //  cy.contains('Password')
          
             cy.get('#username').type('testaccount')
             cy.get('#password').type('userT@12345')
           //  cy.get('#togglePassword').click()
        
            cy.wait(1000)
        
             cy.get('#kc-login').click()
 
             cy.contains('Ciao')    //test fallito
    
        
     })


     
     it ('Material Modeler',function() {   //TEST4:Material Modeler
       // cy.getCookies()

       //cy.session(username, () => {
        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal/material-modeler#/')

       // cy.get('.active > img').click()
  
        cy.contains('Available Applications')
        cy.contains('Material Modeler')
        cy.contains('Open App').click()
        cy.contains('Material Modeler')


       })
     //})


     it ('Password dimenticata',function(){
        //cy.getCookies()
        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal/material-modeler#/')
        
        cy.get('#reset-password').click()
        cy.contains('Email')
        cy.contains('Please enter your email address to reset your password. If you are having trouble to reset your password please contact your local admin.')
        cy.contains('Invia')



     })


    



//})
//})