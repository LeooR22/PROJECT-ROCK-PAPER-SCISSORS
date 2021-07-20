//¿Querés saber más? Entrá en nuestra página web o contactanos para mas info 💻📲 (SEO PARA INSTAGRAM)



    let userScore = 0
    let computerScore = 0


  let playRound = function(playerSelection){

    

    let computerplay = function(){
        let randomitem = Math.floor(Math.random()*3) + 1;
        if (randomitem == 1) {
            return  ("rock") ;
        }   else if (randomitem ==2) {
            return  ("paper");
        }
       else {
        return ("scissors")
       }
    }
    computerplay();

    
    const computerSelection = computerplay();


    const content = document.createElement('li');
    content.classList.add('content');

    const contentLogs = document.createElement('div');
    contentLogs.classList.add('contentLogs');
    


    if (playerSelection == computerSelection){

        userScore += 1 ; computerScore += 1 ;
        
        contentLogs.textContent = ("Tie. " + playerSelection + " equals " + computerSelection)
        
        content.textContent = ("User score = " + userScore + " --- Computer score = " + computerScore)

    } else if (((playerSelection=="rock") && (computerSelection=="paper") )      ||
              (((playerSelection=="paper") && (computerSelection=="scissors")))  || 
              (((playerSelection=="scissors") && (computerSelection=="rock")))){


        userScore += 0 ; computerScore += 1 ;
        
        contentLogs.textContent = ("You lose! " + computerSelection + " beats " + playerSelection)
        
        
        content.textContent = ("User score = " + userScore + " --- Computer score = " + computerScore)

    }

     else {
        
        userScore += 1 ; computerScore += 0 ;
        
        contentLogs.textContent = ("You win! " +  playerSelection + " beats " + computerSelection)
        
        content.textContent = ("User score = " + userScore + " --- Computer score = " + computerScore)

    }

    
    //logs.removeChild(contentLogs);
    logs.appendChild(contentLogs);

    
    eventsList.removeChild(content);
    eventsList.appendChild(content);   
  }

   


 if (userScore == computerScore) {
     console.log ("The result of the game was a draw.")
 }
 else if (userScore > computerScore){
     console.log ("User wins !")
 }


 else {
     console.log ("Computer wins !")
 }

 
 
 const buttons = document.querySelectorAll('button');

 // we use the .forEach method to iterate through each button
 buttons.forEach((button) => {
 
   // and for each one we add a 'click' listener
   button.addEventListener('click', () => {
       if (button.id == 1) {
        return playRound("rock");
       } else if (button.id == 2) {
           return playRound("paper")
       } else if (button.id == 3){
        return playRound("scissors")
       }
    
   });
 });

 const eventsList = document.querySelector("#eventsList");
 const logs = document.querySelector("#logs");

 
