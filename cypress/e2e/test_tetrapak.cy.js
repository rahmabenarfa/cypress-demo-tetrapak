///<reference types="cypress"/>

   //  describe ('TETRAPAK TEST',function() {
   
  
   
    it.skip ('login credenziali corrette',function() {   //TEST1:LOGIN

      
       cy.session('login', () => {

        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal')
  
        

    cy.get('.login-pf-page')   //controlla pagina intera 

    cy.get('#usernameFormGroup').contains('Username or email')   //all'interno di contains bisogna inserire una stringa che contenga anche solo una parte della stringa originale es: Username or emai
   
     //cy.get('#usernameFormGroup').contains('sername or email')   //PASSATO


   cy.get('#passwordFormGroup').contains('Password')  

   cy.get('#reset-password').contains('Forgot Password?')

   cy.get('#kc-login').contains('Log In')

   
   //cy.get('#youremail@domain.com').contains('youremail@domain.com')   //FALLITO 
  
   
    cy.get('#username').type('testaccount')    //inserire da tastiera "testaccount"

    cy.get('input[name="username"]').should('have.value', 'testaccount')  //controllo che ci sia la scritta inserita da tastiera 

    
    cy.wait(5000)

     
    cy.get('#password').type('userT@1234')

    cy.get('input[name="password"]').should('have.value','userT@1234')
     
     
    cy.get('#togglePassword').click()  
  
    
    //cy.get('#kc-login').click()

   
    //cy.contains('Accedi').click()

    //cy.contains('Welcome')

    

    
       })
     })


    it.skip ('login password corretta,username sbagliata',function() {   //TEST2:LOGIN

        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal')
  
       
       // cy.contains('Username o email')
       // cy.contains('Password')
    
         cy.get('#username').type('testaccount1')

         cy.get('#password').type('userT@1234')
        
         cy.get('#togglePassword').click()
    
        cy.wait(1000)
    
         cy.get('#kc-login').click()

        // cy.get('#.kc-feedback-text').contains('Invalid username or password. Your account will be temporarily locked if you insert a wrong password too often')

         

        cy.get('#alert-container').contains('Invalid username or password. Your account will be temporarily locked if you insert a wrong password too often')

    
     })
    

    it.skip ('login password sbagliata, username corretta,messaggio errore sbagliato',function(){  //TEST DEVE FALLIRE
       
        cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal')
  
          //  cy.contains('Username o email')
          //  cy.contains('Password')
          
             cy.get('#username').type('testaccount')

             cy.get('#password').type('userT@12345')

             cy.get('#togglePassword').click()
        
            cy.wait(1000)
        
             cy.get('#kc-login').click()

             cy.get('#alert-container').contains('Ciao') 
 
  })

     
     it.skip ('Password dimenticata',function(){
      //cy.getCookies()
      
      cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal/material-modeler#/')
      
      cy.get('#reset-password').click()
      cy.get('#resetPasswordFormGroup').contains('Email')
      cy.get('#kc-info-text').contains('Please enter your email address to reset your password. If you are having trouble to reset your password please contact your local admin.')
      cy.get('#kc-form-buttons').contains('Submit')

 })




     
     it.skip ('Material Modeler',function() {   //TEST4:Material Modeler
       // cy.getCookies()
        
       cy.visit('https://ta-dpo-aks-test-01.westeurope.cloudapp.azure.com/oiadp-portal/material-modeler#/')
      
       cy.get('#username').type('testaccount')
       cy.get('#password').type('userT@1234')
       cy.get('#kc-login').click()

       cy.get('#root').contains('Material Modeler') 


      
      
      
      
      
       //cy.contains('Available Applications')
       // cy.contains('Material Modeler')
       // cy.contains('Open App').click()
       // cy.contains('Material Modeler')


       })
  


     
    



//})
//})