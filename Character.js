class Character {
  constructor(_lvl = 1, _job = "Warrior", _tag = "Player", _type = "Neutral") {
    this.lvl = _lvl;
    this.job = _job;
    this.tag = _tag;
    this.type = _type;

    if (this.job == "Warrior") {
      this.atk = [4];
      this.def = [6];
      this.hp = 20 + (this.lvl - 1) * 2;
    }

    this.atkDice = new DiceSet(this.atk);
    this.defDice = new DiceSet(this.def);
  }

  attack() {
    this.atkDice.rollSet();
  }

  defend() {
    this.defDice.rollSet();
  }

  draw(x, y) {
    push();
    translate(x, y);
    let w = 420;
    let h = 210;

    strokeWeight(2);
    stroke(230);
    fill(0, 0);

    if(this.tag == "Enemy") {
      stroke(200, 0, 0);
    }

    rectMode(CORNERS);
    rect(0, 0, w, h);

    this.atkDice.draw(230 , 25);
    this.defDice.draw(230, 110);
    pop();
  }


}
