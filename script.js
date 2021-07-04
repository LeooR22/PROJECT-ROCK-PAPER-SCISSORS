//¿Querés saber más? Entrá en nuestra página web o contactanos para mas info 💻📲 (SEO PARA INSTAGRAM)




let computerplay = function(){
    let randomitem = Math.floor(Math.random()*3) + 1;
    if (randomitem == 1) {
        return  ("rock") ;
    }   else if (randomitem ==2) {
        return  ("paper");
    }
   else {
    return ("siccors")
   }
   const computerSelection = computerplay()
}



let playRound = function(){
    if (playerSelection == computerSelection){
         alert("Tie");
         computerplay()
    } else if (((playerSelection=="rock") && (computerSelection=="paper") ) || (((playerSelection=="paper") && (computerSelection=="siccors"))) || (((playerSelection=="siccors") && (computerSelection=="rock")))){
         alert("Lose");
         computerplay()
    }

     else if (((playerSelection=="paper") && (computerSelection=="rock")) ||  (((playerSelection=="siccors") && (computerSelection=="paper")))  || ((playerSelection=="rock") && (computerSelection=="siccors"))){
             alert("win");  
             computerplay()
    }
}
    
    const computerSelection = computerplay();
    const playerSelection="rock";
