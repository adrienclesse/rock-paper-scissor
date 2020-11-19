(function () {

    var computerChoice = Math.random(); 

    if(computerChoice<=0.33) {
        computerChoice="rock";
    }
    else if(computerChoice>0.33 && computerChoice<=0.66) {
        computerChoice="paper";
    }
    else{
        computerChoice="scissor";
    }

    console.log(computerChoice);

    function comparaison(userChoice){
    
        if (userChoice===computerChoice) {
            document.getElementById("draw").innerHTML="it's a draw, please presse the Play again Button";
        }
        else if (userChoice==="rock") {
            if(computerChoice==="scissor") {document.getElementById("info").innerHTML="You won! Your oponent had a scissor, please presse the Play again Button";}
            else if(computerChoice==="paper") {document.getElementById("losing").innerHTML="You've lost, unfortunately, against paper, please presse the Play again Button";}
        }

        else if (userChoice==="paper") {
            if(computerChoice==="rock") {document.getElementById("info").innerHTML="You won! The paper beats the rock, please presse the Play again Button";}
            else if(computerChoice==="scissor") {document.getElementById("losing").innerHTML="You've lost, against a cutting scissor, please presse the Play again Button";}
        }

        else if (userChoice==="scissor") {
            if(computerChoice==="paper") {document.getElementById("info").innerHTML="You won! The scissor cuts the paper, please presse the Play again Button";}
            else if(computerChoice==="rock") {document.getElementById("losing").innerHTML="You've lost, broken by a rock, please presse the Play again Button";}
        }
        function disabled() {
            document.getElementById("myBtn").disabled = true;
          }
   
    };
    
    document.getElementById("rock").addEventListener("click",function () {
        const userChoice = "rock";
        console.log(userChoice);
        comparaison(userChoice);
    });
    
    document.getElementById("paper").addEventListener("click",function () {
        const userChoice="paper";
        console.log(userChoice);
        comparaison(userChoice);

    });

    document.getElementById("scissor").addEventListener("click",function () {
        const userChoice="scissor";
        console.log(userChoice);
        comparaison(userChoice);
    });

    document.getElementById("replay").addEventListener("click",function () {
        window.location.reload();
    });

})();