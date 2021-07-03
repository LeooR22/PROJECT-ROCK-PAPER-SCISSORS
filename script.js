const playerSelection="rock";


let computerSelection = function(){
    let randomitem = Math.floor(Math.random()*3) + 1;
    if (randomitem == 1) {
        return  ("rock") ;
    }   else if (randomitem ==2) {
        return  ("paper");
    }
   else {
    return ("siccors")
   }
}



let playRound = function(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return alert("Tie");
    } else if (playerSelection==="rock" && computerSelection==="paper"){
        return alert("Lose");
    } else if (playerSelection==="paper" && computerSelection==="siccors"){
        return alert("Lose");
    } else if (playerSelection==="siccors" && computerSelection==="rock"){
        return alert("Lose");
        }

     else if (!(playerSelection==="paper" && computerSelection==="rock")){
            return alert("win");
        } else if (!(playerSelection==="siccors" && computerSelection==="paper")){
            return alert("win");
        } else if (!(playerSelection==="rock" && computerSelection==="siccors")){
            return alert("win");
            }
            
    }
