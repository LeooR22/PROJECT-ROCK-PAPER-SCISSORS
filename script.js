//¿Querés saber más? Entrá en nuestra página web o contactanos para mas info 💻📲 (SEO PARA INSTAGRAM)






let game = function(){

    let userScore = 0
    let computerScore = 0


  let playRound = function(){

    

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

    const playerSelection= prompt("Choose rock, paper or scissors").toLowerCase()
    const computerSelection = computerplay();


    if (playerSelection == computerSelection){

        userScore += 1 ; computerScore += 1 ;
        
        console.log ("Tie. " + playerSelection + " equals " + computerSelection)
        
        console.log ("User score = " + userScore + " --- Computer score = " + computerScore)

    } else if (((playerSelection=="rock") && (computerSelection=="paper") )      ||
              (((playerSelection=="paper") && (computerSelection=="scissors")))  || 
              (((playerSelection=="scissors") && (computerSelection=="rock")))){


        userScore += 0 ; computerScore += 1 ;
        
        console.log ("You lose! " + computerSelection + " beats " + playerSelection)
        
        
        console.log ("User score = " + userScore + " --- Computer score = " + computerScore)

    }

     else {
        
        userScore += 1 ; computerScore += 0 ;
        
        console.log ("You win! " +  playerSelection + " beats " + computerSelection)
        
        console.log ("User score = " + userScore + " --- Computer score = " + computerScore)

    }
  }
 playRound();
 playRound();
 playRound();
 playRound();
 playRound();

 if (userScore == computerScore) {
     console.log ("The result of the game was a draw.")
 }
 else if (userScore > computerScore){
     console.log ("User wins !")
 }


 else {
     console.log ("Computer wins !")
 }

 
}
