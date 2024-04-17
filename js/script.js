const ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    this.step -= 1;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();
