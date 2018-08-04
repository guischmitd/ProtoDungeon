let monsterNo;
let playerNo;

let attacker = [];
let monsters = [];
let players = [];
let turn = 1;

let playerTurn = true;
let cnv;

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	monsterNo = floor(random(1, 4.999));
	playerNo = monsterNo;
	for (let i = 0; i < monsterNo; i++) {
		monsters[i] = new Character(1, "Goo", "Enemy", "Neutral");
	}
	for (let i = 0; i < playerNo; i++) {
		players[i] = new Character();
	}
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

	// // Button
	// let button = createButton("Fight!");
	// button.position(465, 50);
	// button.mousePressed(resolveCombat);

	// DRAWING
	let spacing = 20;
	let y0 = 80;

	for (let i = 0; i < players.length; i++) {
		players[i].draw(50, 80 + i * (players[i].h + spacing));
	}

	for (let i = 0; i < monsters.length; i++) {
		monsters[i].draw(500, 80 + i * (monsters[i].h + spacing));
	}

	oldCombat();

}

function mousePressed() {
	for (let monster of monsters) {
		monster.clicked();
	}

	for (let player of players) {
		player.clicked();
	}
}

function combat(players, monsters) {
	for (let i = 0; i < monsters.length + players.length - 1; i++) {
		attacker[i] = players[0]
	}
}

function oldCombat () {
	for (let i = 0; i < playerNo; i++) {
		if (playerTurn) {
			for (let j = 0; j < players.length; j++){
				players[j].turn = false;
				if (j == i) {
					players[j].turn = true;
				}
			}


			for (let monster of monsters) {
				monster.turn = false;
				if (monster.selected) {
					players[i].attack(monster);
					playerTurn = false;
					players[i].turn = false;
				}
			}

		} else {

			for (let j = 0; j < monsters.length; j++) {
				monsters[j].turn = false;
				if (j == i) {
					monsters[j].turn = true;
				}
			}

			monsters[i].turn = true;
			for (let player of players) {
				player.turn = false;
				if (monsters[i].alive && player.selected) {
					monsters[i].attack(player);
					playerTurn = true;
					monsters[i].turn = false;
				}
			}
		}
	}
}
