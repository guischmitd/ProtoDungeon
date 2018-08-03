// TEST NEW DICE SET MECHANICS - NEED TO GENERATE DICE FOR DICESET.

let monsterNo;

let monsters = [];
let players = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	monsterNo = floor(random(1,6.999))
	for (let i = 0; i < monsterNo; i++) {
		monsters[i] = new Character(1, "Goo", "Enemy", "Neutral");
	}
	players[0] = new Character();
}

function draw() {
	background(51);

	// Monster amount text
	textFont("courier new");
	strokeWeight(0);
	fill(250);

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

	// DRAWING
	let spacing = 20;
	let y0 = 80;

	for (let i = 0; i < players.length; i++) {
		players[i].draw(50, 80 + i * (players[i].h + spacing));
	}

	for (let i = 0; i < monsters.length; i++) {
		monsters[i].draw(500, 80 + i * (monsters[i].h + spacing));
	}


}

function diceroll() {
	for (let monster of monsters) {
		monster.attack();
		monster.defend();
	}
	players[0].attack();
	players[0].defend();
	// partyDice.fight(monsterDice);
}
