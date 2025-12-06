// Classe JavaScript — todas as propriedades são públicas por padrão
class Book {
  constructor(title, author) {
    this.title = title; // público
    this.author = author; // público
  }
}

// Exemplo de uso
const book = new Book('Clean Code', 'Robert C. Martin');
console.log(book.title); // OK
book.title = 'Outro Título'; // Também OK — sem proteção
console.log(book.title);
