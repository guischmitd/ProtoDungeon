let monsterNo;
let playerNo;

let monsters = [];
let players = [];
let combatMngr;

let playerTurn = true;
let cnv;

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	// playerNo = floor(random(1, 4.999));
	// monsterNo = floor(random(1, 4.999));

	monsterNo = 4;
	playerNo = 4;
	combatMngr = new CombatManager(playerNo, monsterNo);
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

	// // Button
	// let button = createButton("Fight!");
	// button.position(465, 50);
	// button.mousePressed(resolveCombat);

	//DRAWING
	let spacing = 20;
	let y0 = 80;

	for (let i = 0; i < combatMngr.players.length; i++) {
		combatMngr.players[i].draw(50, 80 + i * (combatMngr.players[i].h + spacing));
	}

	for (let i = 0; i < combatMngr.monsters.length; i++) {
		combatMngr.monsters[i].draw(500, 80 + i * (combatMngr.monsters[i].h + spacing));
	}

}

function mousePressed() {
	combatMngr.clicked();
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
