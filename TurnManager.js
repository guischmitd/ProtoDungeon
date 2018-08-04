class TurnManager {
  constructor(players, monsters) {
    this.players = players;
    this.monsters = monsters;

    this.stack = [];
    let length = 0;
    if (this.players.length > length) {
      length = this.players.length;
    }
    if (this.monsters.length > length) {
      length = this.monsters.length;
    }
    for (let i = 0; i < (length * 2) - 1; i ++) {
      this.stack.push(this.players[i % (this.players.length)]]);
      this.stack.push(this.monsters[i % (this.monsters.length)]);
    }
    console.log(this.stack);
  }

  update() {
  }
}
