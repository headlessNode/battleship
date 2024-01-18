class Ship {
  #length;
  #nHits;
  constructor(length) {
    this.#length = length;
    this.#nHits = 0;
    this.position;
    this.orientatoin;
  }
  hit() {
    if (this.#nHits < this.#length) {
      this.#nHits++;
    } else {
      throw new Error('Hits cannot exceed length');
    }
  }
  isSunk() {
    if (this.#length === this.#nHits) {
      return true;
    } else {
      return false;
    }
  }
}

export default Ship;
