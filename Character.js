class Character {
  constructor(_lvl = 1, _job = "Warrior", _tag = "Player", _type = "Neutral") {
    this.alive = true;
    this.lvl = _lvl;
    this.job = _job;
    this.tag = _tag;
    this.type = _type;
    this.status = null;

    // Drawing
    this.w = 420;
    this.h = 170;

    // Player Classes defaut config (create json later in development)
    if (this.tag == "Player") {

      if (this.job == "Warrior") {
        this.atk = [4, 2, 2];
        this.def = [6];
        this.maxhp = 20 + (this.lvl - 1) * 2;
      }

      this.hp = this.maxhp - 1;
      this.atkDice = new DiceSet(this.atk);
      this.defDice = new DiceSet(this.def);
    }

    // Monster Classes defaut config (create json later in development)
    if (this.tag == "Enemy") {

      if (this.job == "Goo") {
        this.atk = [3];
        this.def = [3];
        this.maxhp = 8 + (this.lvl - 1) * 2;
      }

      this.hp = this.maxhp;
      this.atkDice = new DiceSet(this.atk);
      this.defDice = new DiceSet(this.def);
    }
  }

  roll() {
    this.atkDice.rollSet();
    this.defDice.rollSet();
  }

  draw(x, y) {
    push();
    translate(x, y);

//HP indicator
    fill(230);
    noStroke();
    textSize(18);
    textAlign(RIGHT, BOTTOM);
    if (this.hp < this.maxhp) {
      fill(200, 0, 0);
    }
    text("HP " + this.hp + "/" + this.maxhp, this.w - 10, this.h - 10);

//Card Frame
    strokeWeight(2);
    stroke(230);
    noFill();

    // if(this.tag == "Enemy") {
    //   stroke(200, 0, 0);
    // }

    rectMode(CORNERS);
    rect(0, 0, this.w, this.h);

//Character ID
    textAlign(CENTER, TOP);
    textSize(16);
    noStroke();
    fill(230);
    text("Level " + this.lvl + " " + this.job, this.w / 2, 8);

//Attack and def dice
    this.atkDice.draw(80 , 35);
    this.defDice.draw(80, 100);
    pop();
  }

  fight(other) {
    if (this.atkDice.sum > other.defDice.sum) {
      other.hp -= this.atkDice.sum - other.defDice.sum;
      if (other.hp <= 0) {
        other.alive = false;
      }
    }
    if (other.atkDice.sum > this.defDice.sum) {
      this.hp -= other.atkDice.sum - this.defDice.sum;
      if (this.hp <= 0) {
        this.alive = false;
      }
    }
  }
}
