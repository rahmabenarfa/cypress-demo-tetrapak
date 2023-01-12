///<reference types="cypress"/>

   //  describe ('TETRAPAK TEST',function() {
   
  
   
    it ('login credenziali corrette',function() {   //TEST1:LOGIN

      
       cy.session('login', () => {

        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal')
  
        

    cy.get('.login-pf-page')   //controlla pagina intera 

    cy.get('#usernameFormGroup').contains('Username or email')   //all'interno di contains bisogna inserire una stringa che contenga anche solo una parte della stringa originale es: Username or emai
   
     //cy.get('#usernameFormGroup').contains('sername or email')   //PASSATO


   cy.get('#passwordFormGroup').contains('Password')  

   cy.get('#reset-password').contains('Forgot Password?')

   cy.get('#kc-login').contains('Log In')

   
   cy.get('#youremail@domain.com').contains('youremail@domain.com')   //FALLITO 
   


   //<label for="username" class="control-label">Username or email</label>


    //cy.contains('Username or email')
    //cy.contains('Password')
   
    cy.get('#username').type('testaccount')

    //cy.get('#username').contains('testaccount')



    //cy.get('name= "username"]').should('have.value', 'testaccount')

    cy.get('input[name="username"]').should('have.value', 'testaccount')  //controllo che ci sia la scritta inserita da tastiera 


   // cy.wait(5000)

    cy.get('#password').type('userT@1234')
     
    // cy.get('#togglePassword').click()  
   // cy.contains('Password dimenticata?')


    cy.wait(10000)
   
    //cy.contains('Accedi').click()

    //cy.contains('Welcome')

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
    

    it.skip ('login password sbagliata, username corretta',function(){
       
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


     
     it.skip ('Material Modeler',function() {   //TEST4:Material Modeler
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


     it.skip ('Password dimenticata',function(){
        //cy.getCookies()
        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal/material-modeler#/')
        
        cy.get('#reset-password').click()
        cy.contains('Email')
        cy.contains('Please enter your email address to reset your password. If you are having trouble to reset your password please contact your local admin.')
        cy.contains('Invia')



     })


    



//})
//})