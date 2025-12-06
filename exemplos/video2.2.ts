// Classe TypeScript usando modificadores de acesso
class Livro {
  public title: string;       // explícito (mas se remover, é o modificador padrão)
  private author: string;     // só pode ser acessado dentro da classe
  protected id: number;       // acessível em subclasses

  constructor(title: string, author: string, id: number) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  public getAuthor() {
    return this.author;
  }

  public setAuthor(newAuthor: string) {
    if (newAuthor === "") {
      throw new Error('Nome do autor é obrigatório');
    }

    this.author = newAuthor;
  }
}

const livro = new Livro("Clean Code", "Robert C. Martin", 1);

livro.title = "Outro título"; // OK (público)
livro.author = "Novo Autor";  // ❌ ERRO — 'author' é privado
livro.id = 10;                // ❌ ERRO — 'id' é protected