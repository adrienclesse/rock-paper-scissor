(function () {

    var computerChoice = Math.random(); 

    if(computerChoice<=0.33) {computerChoice="rock"}
    else if(computerChoice>0.33 && computerChoice<=0.66) {computerChoice="paper"}
    else{computerChoice="scissor"}

   

    console.log(computerChoice);

    function comparaison(userChoice){
    
        if (userChoice===computerChoice) {
            alert("It's a drown!")
        }
        else {
            alert("woooops")
        };
   
    };
       
    
    

    document.getElementById("rock").addEventListener("click",function () {
        alert("you hit your oponent with a rock!");
        let userChoice="rock";
        console.log(userChoise);
        comparaison(userChoice);
    });
    
    document.getElementById("paper").addEventListener("click",function () {
        alert("You defend yourself with a paper!");
        let userChoice="paper";
        console.log(userChoise);
        comparaison(userChoice);
    });

    document.getElementById("scissor").addEventListener("click",function () {
        alert("you cut your oponent with a scissor !")
        let userChoice="scissor";
        console.log(userChoice);
        comparaison(userChoice);
    });
      
        
    

   

    


})();