// TEST NEW DICE SET MECHANICS - NEED TO GENERATE DICE FOR DICESET.

let monsterNo;

let monsters = [];
let players = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	monsterNo = floor(random(1, 4.999))
	for (let i = 0; i < monsterNo; i++) {
		monsters[i] = new Character(1, "Goo", "Enemy", "Neutral");
	}
	players[0] = new Character();
}

function draw() {
	background(31);

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
	let button = createButton("Fight!");
	button.position(465, 50);
	button.mousePressed(resolveCombat);

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

function resolveCombat() {
	if (monsters[0]) {
		for (let monster of monsters) {
			monster.roll();
		}

		players[0].roll();

		players[0].fight(monsters[0]);
		for (let i = monsters.length - 1; i >= 0; i--) {
			if (!monsters[i].alive) {
				monsters.splice(i, 1);
			}
		}
	}
}
