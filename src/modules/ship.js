class Ship {
  #length;
  #nHits;
  #sunkStatus;
  constructor(length, nHits) {
    this.#length = length;
    this.#nHits = nHits;
    this.#sunkStatus = false;
  }
  hit() {
    this.#nHits++;
  }
  isSunk() {
    if (this.#length === this.#nHits) {
      this.#sunkStatus = true;
    } else {
      this.#sunkStatus = false;
    }
  }
}

export default Ship;
