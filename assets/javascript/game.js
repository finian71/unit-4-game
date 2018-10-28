$(document).ready(function) {

   var players = [Obi Wan Kenobi = {
                    name: "Obi Wan Kenobi",
                    healthPoints: 120,
                    initialAttackPower: 8,
                    attackPower: 8,
                    counterAttackPower: 2,
                    isPlayerOne: false,
                    isPlayerTwo: false,
                  }, 
                  Luke = {
                    name: "Luke Skywalker",
                    healthPoints: 100,
                    initialAttackPower: 9,
                    attackPower: 9,
                    counterAttackPower: 5,
                    isPlayerOne: false,
                    isPlayerTwo: false,
                  },
                  Emperor Palpatine = {
                    name: "Emperor Palpatine",
                    healthPoints: 150,
                    initialAttackPower: 2,	
                    attackPower: 2,
                    counterAttackPower: 20,
                    isPlayerOne: false,
                    isPlayerTwo: false,
                  },
                  Darth Vader = {
                    name: "Darth Vader",
                    healthPoints: 180,
                    initialAttackPower: 1,
                    attackPower: 1,
                    counterAttackPower: 25,
                    isPlayerOne: false,
                    isPlayerTwo: false,
                  }]
        
var player;
var opponent;
playerOneSelected = false;
playerTwoSelected = false;
gameStart = false;
var enemiesRemaining = players.length -1;
var bettersaberon = new Audio ("assets/Audio/better saber on.mp3");
var obiwan_theforce = new Audio ("assets/Audio/obiwan_theforce.wav");
var Vaderforcestrong = new Audio ("assets/Audio/Vaderforcestrong.mp3");
var Emperorkill = new Audio ("assets/Audio/Emperorkill.mp3");
var hansolo_badfeeling = new Audio ("assets/Audio/hansolo_badfeeling.mp3");	
var yodalaughing = new Audio ("assets/Audio/yodalaughing.mp3");
var luke_junk = new Audio ("assets/Audio/luke_junk.mp3");
var nerfherder = new Audio ("assets/Audio/nerfherder.mp3");

playerSelect();


startBattle();

function playerSelect(){
    $("#Obi Wan Kenobi").on("click", function() {
        if (playerOneSelected === false){
                console.log("Obi Wan Kenobi is first player");
            buttonSelect.play();
            $("#Obi Wan Kenobi").appendTo("#player-fight-area");
            $("#player-name").text(Obi Wan Kenobi.name);
            $("#player-hp").text("Force Level");
            $("#player-total-hp").text(Obi Wan Kenobi.healthPoints);
            playerOneSelected = true;
            Obi Wan Kenobi.isPlayerOne = true;
            player = Obi Wan Kenobi;			
            $("#Obi Wan Kenobi").addClass('flipped');
            Emperorkill.play();
            setTimeout(enemySelect, 1000 *2);
                console.log("player one is " + playerOneSelected);
            }
    });	

    $("#Luke Skywalker").on("click", function() {
        if (playerOneSelected === false){
                console.log("Luke Skywalker is first player");
            buttonSelect.play();
            $("#Luke Skywalker").appendTo("#player-fight-area");
            $("#player-name").text(Luke Skywalker.name);
            $("#player-hp").text("Force Level");
            $("#player-total-hp").text(Luke Skywalker.healthPoints);
            playerOneSelected = true;
            Luke Skywalker.isPlayerOne = true;
            player = Luke Skywalker;
            $("#Luke Skywalker").addClass('flipped');
            Emperorkill.play();
                console.log("player one is " + playerOneSelected);
            setTimeout(enemySelect, 1000 *2);
        }
    });	

    $("#Emperor Palpatine").on("click", function() {
        if (playerOneSelected === false){
                console.log("Emperor Palpatine is first player");
            buttonSelect.play();
            $("#Emperor Palpatine").appendTo("#player-fight-area");
            $("#player-name").text(Emperor Palpatine.name);
            $("#player-hp").text("Force Level");
            $("#player-total-hp").text(Emperor Palpatine.healthPoints);
            $("#player-total-hp").text(Emperor Palpatine.healthPoints);
            playerOneSelected = true;
            Emperor Palpatine.isPlayerOne = true;
            player = Emperor Palpatine;
            Emperorkill.play();
                console.log("player one is " + playerOneSelected);
            setTimeout(enemySelect, 1000 *2);
        }
    });	

    $("#Darth Vader").on("click", function() {
        if (playerOneSelected === false){
                console.log("Darth Vader is first player");
            buttonSelect.play();
            $("#Darth Vader").appendTo("#player-fight-area");
            $("Darth Vader").addClass('flipped');
            $("#player-name").text(Darth Vader.name);
            $("#player-hp").text("Force Level");
            $("#player-total-hp").text(Darth Vader.healthPoints);
            playerOneSelected = true;
            Darth Vader.isPlayerOne = true;
            player = Darth Vader;
            $("#Darth Vader").addClass('flipped');
            Emperorkill.play();
                console.log("player one is " + playerOneSelected);
            setTimeout(enemySelect, 1000 *2);
        }
    });	
}

function enemySelect(){
    $("#select-text").text("Select your Opponent");
    //HTML - display "select your opponent"
    $("#Obi Wan Kenobi").on("click", function() {
        if (playerTwoSelected === false && Obi Wan Kenobi.isPlayerOne === false){
            console.log("Obi Wan Kenobi is second player");
        buttonSelect.play();
        $("#Obi Wan Kenobi").appendTo("#opponent-fight-area");
        $("#opponent-name").text(Obi Wan Kenobi.name);
        $("#opponent-hp").text("Force Level");
        $("#opponent-total-hp").text(Obi Wan Kenobi.healthPoints);
        playerTwoSelected = true;
        isPlayerTwo = true;
        gameStart = true;
        opponent = Obi Wan Kenobi;
        $("#select-text").text("");
        Emperorkill.play();
            console.log("player two is " + playerTwoSelected);
        }
    });	

    $("#Luke Skywalker").on("click", function() {
        if (playerTwoSelected === false && Luke Skywalker.isPlayerOne === false){
                console.log("Luke Skywalker is second player");
            buttonSelect.play();
            $("#Luke Skywalker").appendTo("#opponent-fight-area");
            $("#opponent-name").text(Luke Skywalker.name);
            $("#opponent-hp").text("Force Level");
            $("#opponent-total-hp").text(Luke Skywalker.healthPoints);
            playerTwoSelected = true;
            isPlayerTwo = true;
            gameStart = true;
            opponent = Luke Skywalker;
            $("#select-text").text("");
            Emperorkill.play();
                console.log("gamestart is " + gameStart);
                console.log("player two is " + playerTwoSelected);
        }
    });	

    $("#Emperor Palpatine").on("click", function() {
        if (playerTwoSelected === false && Emperor Palpatine.isPlayerOne === false){
                console.log("Emperor Palpatine is second player");
            buttonSelect.play();
            $("#Emperor Palpatine").appendTo("#opponent-fight-area");
            $("#opponent-name").text(Emperor Palpatine.name);
            $("#opponent-hp").text("Force Level");
            $("#opponent-total-hp").text(Emperor Palpatine.healthPoints);
            playerTwoSelected = true;
            isPlayerTwo = true;
            gameStart = true;
            opponent = maul;
            $("#Emperor Palpatine").addClass('flipped');
            $("#select-text").text("");
            Emperorkill.play();
                console.log("player two is " + playerTwoSelected);
        }
    });	

    $("#Darth Vader").on("click", function() {
        if (playerTwoSelected === false && Darth Vader.isPlayerOne === false){
                console.log("Darth Vader is second player");
            buttonSelect.play();
            $("#Darth Vader").appendTo("#opponent-fight-area");
            $("#opponent-name").text(Darth Vader.name);
            $("#opponent-hp").text("Force Level");
            $("#opponent-total-hp").text(Darth Vader.healthPoints);
            playerTwoSelected = true;
            isPlayerTwo = true;
            gameStart = true;
            opponent = Darth Vader;
            $("#select-text").text("");
            Emperorkill.play();
                console.log("player two is " + playerTwoSelected);
        }
    });	
}

function attack(){
		// options = {duration: 200,
		// 	easing: 'linear'}
	opponent.healthPoints = opponent.healthPoints - player.attackPower;
	$("#opponent-total-hp").text(opponent.healthPoints);
		console.log("opponent HP is " + opponent.healthPoints);
}

function counterAttack(){
	player.healthPoints = player.healthPoints - opponent.counterAttackPower;
	$("#player-total-hp").text(player.healthPoints);
		console.log("player HP is " + player.healthPoints);
		console.log("opponent counter attack power is " + opponent.counterAttackPower)
	if (player.healthPoints <= 0){
		gameLose();	
		}
	}

function increaseAttackPower(){
	player.attackPower = player.attackPower + player.initialAttackPower;
		console.log("player attack power is " + player.attackPower);
	}	
	//starts the game over again
	function gameReset(){
			[Obi Wan Kenobi = {
						name: "Obi Wan Kenobi",
						healthPoints: 120,
						initialAttackPower: 8,
						attackPower: 8,
						counterAttackPower: 2,
						isPlayerOne: false,
						isPlayerTwo: false,
					}, 
					Luke Skywalker = {
						name: "Luke Skywalker",
						healthPoints: 100,
						initialAttackPower: 9,
						attackPower: 9,
						counterAttackPower: 5,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					Emperor Palpatine = {
						name: "Emperor Palpatine",
						healthPoints: 150,
						initialAttackPower: 2,	
						attackPower: 2,
						counterAttackPower: 20,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					Darth Vader = {
						name: "Darth Vader",
						healthPoints: 180,
						initialAttackPower: 1,
						attackPower: 1,
						counterAttackPower: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
					}]				
			playerOneSelected = false;
			playerTwoSelected = false;
			enemiesRemaining = players.length - 1;
			$("#select-text").text("Select your Character")
			$("#game-end-container",).html("");
			$("#game-end-text-container").html("");
			$("#opponent-name").text("");
			$("#opponent-hp").text("");
			$("#player-name").text("");
			$("#player-hp").text("");
			$("#player-total-hp").text("");
			$("#opponent-total-hp").text("");
			$("#player-fight-area").html("");
			$("#opponent-fight-area").html("");
            $(".character-selection-section").html("");
            $("<img class ='character' id='luke skywalker' src = 'assets/images/luke-skywalker.jpg'/>").appendTo(".character-selection-section");
            $("<img class ='character' id='Obi Wan Kenobi' src = 'assets/images/Kenobi.jpg'/>").appendTo(".character-selection-section");
            $("<img class ='character' id='Emperor Palpatine' src = 'assets/images/Palpatine Lightning.jpg'/>").appendTo(".character-selection-section");
            $("<img class ='character' id='Darth Vader' src = 'assets/images/Vader.jpg'/>").appendTo(".character-selection-section");
            console.log("game has reset");
            playerSelect();
        }

        function gameWin() {
            maulTheme.pause();
            $("#opponent-total-hp").text(0);
            console.log("you win")	
            gameStart = false;
            Vaderforcestrong.play();
            setTimeout(function(){$("#game-end-container").html("<img id='Darth Vader' src='assets/images/Vaderwallpaper.jpg'/>")}, 1000*3);
            $("#game-end-text-container").html("Welcome to the Dark Side of the Force");
            $("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
                "position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
                "text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
            setTimeout(gameReset, 1000 * 8);
        }
    
        function gameLose() {
            $("#player-total-hp").text(0);
            gameStart = false;
            console.log("you lose");
            Vaderforcestrong.play();
            setTimeout(function(){$("#game-end-container").html("<img id='Emperor Palpatine' src='assets/images/Emperor_lightning.gif'/>")}, 1000*3);
            $("#game-end-text-container").html("Game Over");
            $("#game-end-text-container").css({"color":"red", "font-size":"30px","font-family":"Trade Winds", 
                "position":"absolute", "left":"50%", "margin-right":"-50%", "transform":"translate(-50%)", 
                "text-shadow": "2px 2px 2px rgba(255,255,255,.6)"});
            setTimeout(gameReset, 1000 * 8);	
        }
        //this is the main battle code, once players have been selected. use the attack button to
        //initiate attacks. 
        function startBattle(){
            $("#attack-button").on("click", function() {
                console.log("button pressed");
                if (gameStart === true){   	
                    attack();
                    increaseAttackPower();
                    if (opponent.healthPoints <= 0){
                    enemiesRemaining--;
                    console.log("enemies remaining is " + enemiesRemaining);
                    checkProgress();
                    }
                    else {
                    counterAttack();
                    Clash_clash.play();
                    }
                }		
            });		
        }	
    });