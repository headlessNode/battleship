class Ship {
  #nHits;
  constructor(length, orientation) {
    this.#nHits = 0;
    this.length = length;
    this.orientation = orientation;
    this.startPostion = null;
    this.endPosition = null;
  }
  hit() {
    if (this.#nHits < this.length) {
      this.#nHits++;
    } else {
      throw new Error('Hits cannot exceed length');
    }
  }
  isSunk() {
    if (this.length === this.#nHits) {
      return true;
    } else {
      return false;
    }
  }
}

export default Ship;
