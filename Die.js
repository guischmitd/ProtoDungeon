class Die {
  constructor(_faces) {
    this.faces = _faces;
    this.value = null;
  }

  roll() {
    this.value = floor(random(1, this.faces + 0.999));
  }
}
