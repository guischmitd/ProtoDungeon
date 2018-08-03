class DiceSet {
  constructor(_diceArray) {
    this.diceArray = _diceArray;
    this.dice = [];
    this.amount = _diceArray.length;

    console.log("amount: " + this.amount)

    for (let i = 0; i < this.amount; i++) {
      this.dice[i] = new Die(this.diceArray[i]);
      console.log(this.dice);
    }
  }

  rollSet() {
    for (let die of this.dice) {
      die.roll();
    }
    // this.die.sort(function(a, b){return b-a});
  }

  draw(x, y) {
    push();
    rectMode(CORNERS);
    stroke(230);
    translate(x, y);
    let gap = 12;
    let size = 50;


    for (let die of this.dice) {
      strokeWeight(2);
      stroke(230);
      noFill();
      rect(0, 0, size, size);


      if(die.value != null) {
        strokeWeight(0);
        fill(230);
        textSize(32);
        textAlign(CENTER, CENTER);
        text(die.value, size/2, size/2);
        // console.log(die.value);
      }

      translate(size + gap, 0);
    }
    pop();
  }

  fight(enemy) {
    if (this.amount <= enemy.amount) {
      for (let i = 0; i < this.amount; i++) {
        if (this.die[i] > enemy.die[i]) {
          enemy.dead[i] = true;
        }
        if (this.die[i] < enemy.die[i]) {
          this.dead[i] = true;
        }
      }
    } else {
      for (let i = 0; i < enemy.amount; i++) {
        if (this.die[i] > enemy.die[i]) {
          enemy.dead[i] = true;
        }
        if (this.die[i] < enemy.die[i]) {
          this.dead[i] = true;
        }
      }
    }
  }
}
