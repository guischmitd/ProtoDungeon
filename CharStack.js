class CharStack {
  constructor(playerNo, monsterNo) {
    //Character arrays
    this.monsters = [];
    this.players = [];

    for (let i = 0; i < monsterNo; i++) {
      this.monsters[i] = new Character(i + 1, "Goo", "Enemy", "Neutral");
  	}
  	for (let i = 0; i < playerNo; i++) {
  		this.players[i] = new Character(i + 1);
  	}

    //find the largest
    this.stack = [];
    let length = Math.max(this.players.length,this.monsters.length);

    //populate the stack
    for (let i = 0; i < (length * 2) - 1; i ++) {
      this.stack.push(this.players[i % (this.players.length)]);
      this.stack.push(this.monsters[i % (this.monsters.length)]);
    }

    for (let char of this.stack) {
      char.turn = false;
    }
    this.stack[0].turn = true;
  }

  clicked() {
    for (let char of this.stack) {
      char.clicked();
    }

    for (let target of this.stack) {
      if (target.selected && target.tag != this.stack[0].tag) {
          this.stack[0].attack(target);
          this.stack[0].turn = false;
          this.updateStack();
          break;
      }
    }


  }

  updateStack() {
      // Removing dead chars
      for (let i = this.stack.length - 1; i >= 0; i--) {
        if (!this.stack[i].alive) {
          this.stack.splice(i,1);
        }
      }

      // Moving attacker to end of queue
      let temp = this.stack.shift();
      this.stack.push(temp);

      this.stack[0].turn = true;

      console.log(this.stack);

  }

  next() {
    this.stack[0].turn = true;
  }
}
