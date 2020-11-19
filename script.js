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
            document.getElementById("draw").innerHTML="it's a draw";
        }
        else if (userChoice==="rock") {
            if(computerChoice==="scissor") {document.getElementById("info").innerHTML="You won!, Your oponent had a scissor";}
            else if(computerChoice==="paper") {document.getElementById("losing").innerHTML="You've lost, unfortunately, against paper";}
        }

        else if (userChoice==="paper") {
            if(computerChoice==="rock") {document.getElementById("info").innerHTML="You won!, paper beats rock";}
            else if(computerChoice==="scissor") {document.getElementById("losing").innerHTML="You've lost, against a cutting scissor";}
        }

        else if (userChoice==="scissor") {
            if(computerChoice==="paper") {document.getElementById("info").innerHTML="You won!, scissor cuts the paper";}
            else if(computerChoice==="rock") {document.getElementById("losing").innerHTML="You've lost, broken by a rock";}
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