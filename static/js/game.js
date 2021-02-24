function getData(){
    let gameField = document.getElementById('game-field');
    let numOfPlayers = parseInt(gameField.dataset.playersnum);
    let numOfFields = parseInt(gameField.dataset.fieldnum);
    return [numOfFields, numOfPlayers];
}


let clickHandler = function(event) {
    let texts = document.querySelectorAll("p");
    for(text of texts){
        text.remove();
    }
    // console.log(event);
    let animation_seq = function() {

        for (let counter = 0; counter <= 5; counter++) {
            switch (counter) {
                case 0:
                    setTimeout(function () {
                        let dice = document.getElementById('roll-dice');
                        dice.style.backgroundImage = "url('/static/img/dice2.png')";
                    }, 400);
                    break;
                case 1:
                    setTimeout(function () {
                        let dice = document.getElementById('roll-dice');
                        dice.style.backgroundImage = "url('/static/img/dice3.png')";
                    }, 700);
                    break;
                case 2:
                    setTimeout(function () {
                        let dice = document.getElementById('roll-dice');
                        dice.style.backgroundImage = "url('/static/img/dice4.png')";
                    }, 1000);
                    break;
                case 3:
                    setTimeout(function () {
                        let dice = document.getElementById('roll-dice');
                        dice.style.backgroundImage = "url('/static/img/dice6.png')";
                    }, 1300);
                    break;
                case 4:
                    setTimeout(function () {
                        let dice = document.getElementById('roll-dice');
                        dice.style.backgroundImage = "url('/static/img/dice5.png')";
                    }, 1600);
                    break;
                case 5:
                    setTimeout(function () {
                        // console.log(random_number);
                        let dice = document.getElementById('roll-dice');
                        dice.style.backgroundImage = "url('/static/img/dice4.png')";
                    }, 1900);
                    break;
            }
        }
    }

    let proper_diece_roll = function(selectedNumber) {
        // console.log("switch2");
        // console.log((random_number));
        // var dice1 = document.getElementById('roll-dice');

        switch (parseInt(selectedNumber)) {
            // var dice = document.getElementById('roll-dice');
            case 1:
                var dice = document.getElementById('roll-dice');
                dice.style.backgroundImage = "url('/static/img/dice1.png')";
                console.log("switch1");
                break;
            case 2:
                var dice = document.getElementById('roll-dice');
                dice.style.backgroundImage = "url('/static/img/dice2.png')";
                console.log("switch2");
                break;
            case 3:
                var dice = document.getElementById('roll-dice');
                dice.style.backgroundImage = "url('/static/img/dice3.png')";
                console.log("switch3");
                break;
            case 4:
                var dice = document.getElementById('roll-dice');
                dice.style.backgroundImage = "url('/static/img/dice4.png')";
                console.log("switch4");
                break;
            case 5:
                var dice = document.getElementById('roll-dice');
                dice.style.backgroundImage = "url('/static/img/dice5.png')";
                console.log("switch5");
                break;
            case 6:
                var dice = document.getElementById('roll-dice');
                dice.style.backgroundImage = "url('/static/img/dice6.png')";
                console.log("switch6");
                break;
        }
    };
        let random_number = Math.floor(Math.random() * 7);
    if (random_number === 0) {
        random_number = 1
        }
    animation_seq();
    setTimeout(function () {proper_diece_roll(random_number)},2200);
    event.target.setAttribute('rolled-number', random_number);
    let boardGame = document.getElementById("game-field");
    let whichPlayer = boardGame.dataset.player;


    let fieldsAll = document.getElementsByClassName("field");
    if(whichPlayer === "player1"){
        let playerOneField = boardGame.dataset.plone;
        let fieldNum = parseInt(playerOneField) + random_number;

        for(let field of fieldsAll){
            if (fieldNum >= 23){
                    const won = document.createElement("p");
                        won.textContent = "Player red lose, because he shouldn't even left home. HE got infected.";
                        document.querySelector('body').appendChild(won);
                }
            if (field.dataset.field === fieldNum.toString()){
                field.style.backgroundImage = "url('/static/img/game_pawn1.png')";
                if (field.getAttribute("class") === "field challenge"){
                        const challenge = document.createElement("p");
                        challenge.textContent = "You got infected. Next time wash your hands more often. (-3 fields)";
                        document.querySelector('body').appendChild(challenge);
                    }
                boardGame.dataset.plone = fieldNum.toString();
            }
            if(field.dataset.field === playerOneField.toString()){
                field.style.backgroundImage = "url('/static/img/normalplace.png')";
            }
        }
        boardGame.dataset.player = "player2";
    }
        else{
            let playerTwoField = boardGame.dataset.pltwo;
            let fieldNum = parseInt(playerTwoField) + random_number;
            for(let field of fieldsAll){
                if (fieldNum >= 23){
                    const won = document.createElement("p");
                        won.textContent = "Player blue lose, because he shouldn't even left home. HE got infected. ";
                        document.querySelector('body').appendChild(won);
                }
                if (field.dataset.field === fieldNum.toString()){
                    field.style.backgroundImage = "url('/static/img/game_pawn2.png')";

                    if (field.getAttribute("class") === "field challenge"){
                        const challenge = document.createElement("p");
                        challenge.textContent = "You got infected. Warsaw hospiral are full. You need to go to Lodz. (-5 fields)";
                        document.querySelector('body').appendChild(challenge);
                    }
                    boardGame.dataset.pltwo = fieldNum.toString();
                }
                if (field.dataset.field === playerTwoField.toString()){
                    field.style.backgroundImage = "url('/static/img/normalplace.png')";
                }
        }
        boardGame.dataset.player = "player1";
    }

}


function init() {

    var gameBoard = document.getElementById("game-field");
    gameBoard.setAttribute("data-player", "player1");
    let rollDice = document.getElementById('roll-dice');
    rollDice.addEventListener("mousedown", clickHandler, true);


}


function game() {
    init();
    const [numOfFields, numOfPlayers] = getData();
    var fieldsChallenge = [];
    for (let field of document.getElementsByClassName('field')) {
        console.log("this: " + field.getAttribute("class"));
        if (field.getAttribute("class") === "field challenge") {
            fieldsChallenge.push(parseInt(field.dataset.field));
        }
    }
    console.log(numOfFields);
    let isGameOn = true;
}

game();