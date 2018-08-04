// REFACTOR LATER /s

class CombatManager {
  constructor(playerNo, monsterNo) {
    //Character arrays
    this.monsters = [];
    this.players = [];

    this.playerTurn = true;

    for (let i = 0; i < monsterNo; i++) {
      this.monsters[i] = new Character(i + 1, "Goo", "Enemy", "Neutral");
  	}
  	for (let i = 0; i < playerNo; i++) {
  		this.players[i] = new Character(i + 1);
  	}

    this.players[0].turn = true;

  }



  clicked() {
    // Listeners
    for (let player of this.players) {
      player.clicked();
    }

    for (let monster of this.monsters) {
      monster.clicked();
    }


    // Combat resolution
    if (this.playerTurn) {
      this.players[0].turn = true;
      for (let i = 0; i < this.monsters.length; i++) {
        if(this.monsters[i].selected) {
          this.players[0].attack(this.monsters[i]);
          this.players[0].turn = false;
          let temp = this.players.shift();
          this.players.push(temp);
          this.playerTurn = false;
          this.monsters[0].turn = true;
        }
      }
    } else {
      this.monsters[0].turn = true;
      for (let i = 0; i < this.players.length; i++) {
        if(this.players[i].selected) {
          this.monsters[0].attack(this.players[i]);
          this.monsters[0].turn = false;
          let temp = this.monsters.shift();
          this.monsters.push(temp);
          this.playerTurn = true;
          this.players[0].turn = true;
        }
      }
    }

  }
}
