class Character {
  constructor(_lvl = 1, _job = "Warrior", _tag = "Player", _type = "Neutral") {
    this.lvl = _lvl;
    this.job = _job;
    this.tag = _tag;
    this.type = _type;

    // Drawing
    this.w = 420;
    this.h = 170;


    if (this.tag == "Player") {

      if (this.job == "Warrior") {
        this.atk = [4];
        this.def = [6];
        this.hp = 20 + (this.lvl - 1) * 2;
      }

      this.atkDice = new DiceSet(this.atk);
      this.defDice = new DiceSet(this.def);
    }

    if (this.tag == "Enemy") {

      if (this.job == "Goo") {
        this.atk = [3];
        this.def = [3];
        this.hp = 8 + (this.lvl - 1) * 2;
      }

      this.atkDice = new DiceSet(this.atk);
      this.defDice = new DiceSet(this.def);
    }
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

    strokeWeight(2);
    stroke(230);
    noFill();

    if(this.tag == "Enemy") {
      stroke(200, 0, 0);
    }

    rectMode(CORNERS);
    rect(0, 0, this.w, this.h);

    this.atkDice.draw(55 , 25);
    this.defDice.draw(55, 95);
    pop();
  }

}
