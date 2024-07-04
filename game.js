let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#moveBtn");
const scoreUser = document.querySelector("#user-score");
const scoreComp = document.querySelector("#comp-user");


const compChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomOption = Math.floor(Math.random() * 3);
    return options[randomOption];
};

const drawGame = () =>{
    console.log("game was draw -_-");
    msg.innerText = "Game Draw! Try Again";
    msg.style.backgroundColor ="purple";
    msg.style.color = "white";
}

const showWinner = (userWin, userChoice, getComputerChoice) => {
    if (userWin){
        userScore++;
        scoreUser.innerText = userScore;
        console.log("You Won!");
        msg.innerText = `You Won! Your ${userChoice} beated ${getComputerChoice}`;
        msg.style.backgroundColor ="green";
        msg.style.color = "white";
    }else {
        compScore++;
        scoreComp.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You Lose! Computer's ${getComputerChoice} beated ${userChoice}`;
        msg.style.backgroundColor ="red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Comp choice
    const getComputerChoice = compChoice();
    console.log("comp choice = ",getComputerChoice);

    if(userChoice === getComputerChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = getComputerChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = getComputerChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,getComputerChoice);
    }
}

choices.forEach( (choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

