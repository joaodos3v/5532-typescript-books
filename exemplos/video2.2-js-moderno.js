class BookJSPrivate {
  #author; // privado de verdade no JS moderno

  constructor(title, author) {
    this.title = title;
    this.#author = author;
  }

  getAuthor() {
    return this.#author;
  }
}
