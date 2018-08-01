// TEST NEW DICE SET MECHANICS - NEED TO GENERATE DICE FOR DICESET.

let monsterNo;
let partySize = 4;
let partyDice;
let monsterDice;

let players = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	monsterNo = floor(random(1,6.999))
	players[0] = new Character();

	
}

function draw() {
	background(51);
	// Drawing

	textFont("courier new");
	strokeWeight(0);
	fill(250);

	players[0].draw(50, 80);

// Monster amount text
	if (monsterNo > 1) {
		text
		text("There are " + monsterNo + " monsters in the room!", 16, 32);
	} else {
		text("There is " + monsterNo + " monster in the room!", 16, 32);
	}

// Button
	let button = createButton("Roll!");
	button.position(230, 64);
	button.mousePressed(diceroll);

}

function diceroll() {
	players[0].attack();
	players[0].defend();
	// partyDice.fight(monsterDice);
}
