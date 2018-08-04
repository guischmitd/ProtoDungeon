class Character {
  constructor(_lvl = 1, _job = "Warrior", _tag = "Player", _type = "Neutral") {
    this.alive = true;
    this.lvl = _lvl;
    this.job = _job;
    this.tag = _tag;
    this.type = _type;
    this.status = null;

    this.turn = false;
    this.selected = false;
    // Drawing
    this.w = 420;
    this.h = 170;

    // Player Classes defaut config (create json later in development)
    if (this.tag == "Player") {

      if (this.job == "Warrior") {
        this.atk = [4, 4, 2];
        this.def = [4];
        this.maxhp = 20 + (this.lvl - 1) * 2;
      }

      this.hp = this.maxhp;
      this.atkDice = new DiceSet(this.atk);
      this.defDice = new DiceSet(this.def);
    }

    // Monster Classes defaut config (create json later in development)
    if (this.tag == "Enemy") {

      if (this.job == "Goo") {
        this.atk = [6];
        this.def = [2];
        this.maxhp = 8 + (this.lvl - 1) * 2;
      }

      this.hp = this.maxhp;
      this.atkDice = new DiceSet(this.atk);
      this.defDice = new DiceSet(this.def);
    }
  }


  draw(x, y) {
    this.x = x;
    this.y = y;

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
    if (this.alive) {
      stroke(230);
    } else {
      stroke(120);
    }

    if (this.turn) {
      stroke(25, 230, 0);
    }

    noFill();
    rectMode(CORNERS);

    if(this.mouseOver()) {
      strokeWeight(3);
      rect(-5, -5, this.w + 5, this.h + 5);
    }
    strokeWeight(2);
    rect(0, 0, this.w, this.h);

//Character ID
    textAlign(CENTER, TOP);
    textSize(16);
    noStroke();

    if (this.alive) {
      fill(230);
    } else {
      fill(120);
    }
    text("Level " + this.lvl + " " + this.job, this.w / 2, 8);

//Attack and def dice
    if (this.alive) {
      this.atkDice.draw(80 , 35);
      this.defDice.draw(80, 100);
    } else {
      textSize(80);
      textAlign(CENTER, CENTER)
      text("DEAD", this.w/2, this.h/2)
    }
    pop();
  }

  attack(other) {
    this.atkDice.rollSet();
    other.defDice.rollSet();
    if (this.atkDice.sum > other.defDice.sum) {
      other.hp -= this.atkDice.sum - other.defDice.sum;
      if (other.hp <= 0) {
        other.hp = 0;
        other.alive = false;
      }
    }
  }

  mouseOver() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }

  clicked() {
    if (this.mouseOver() && this.alive) {
      this.selected = true;
    } else {
      this.selected = false;
    }
  }
}
