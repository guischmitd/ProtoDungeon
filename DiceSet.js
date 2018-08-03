class DiceSet {
  constructor(_diceArray) {
    this.diceArray = _diceArray;
    this.dice = [];
    this.amount = _diceArray.length;
    this.sum = 0;

    for (let i = 0; i < this.amount; i++) {
      this.dice[i] = new Die(this.diceArray[i]);
    }
  }

  rollSet() {
    this.sum = 0;
    for (let die of this.dice) {
      die.roll();
      this.sum += die.value;
      console.log(this.sum);
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

    if (this.sum > 0) {
      textAlign(LEFT, CENTER);
      noStroke();
      fill(230);
      textSize(32);
      text(this.sum, -size, size/2)
    }

    for (let die of this.dice) {
      strokeWeight(2);
      stroke(230);
      noFill();
      rect(0, 0, size, size);


      if(die.value != null) {
        noStroke();
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

}
