let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice") ;
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

//Function -1 
const gencomchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

//Function -2
const drawgame = () =>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}

//Function -3
const showwinner =(userwin, userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You lose");
        msg.innerText =`You lost ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
};

//Function -4
const playgame = (userchoice) => {  
    // Generate computer choice
    const compchoice = gencomchoice();

    if (userchoice === compchoice) {
        // Draw Game
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //scissors, paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock, scissors
            userwin = compchoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});