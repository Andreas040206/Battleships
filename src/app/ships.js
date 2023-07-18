class ship {
  constructor(ary) {
    this.length = ary.length;
    this.coor = ary;
    this.hits = 0;
  }
  hit() {
    this.hits++;
  }
  isSunk = () => (this.hits == this.length ? true : false);
}

export default ship;
