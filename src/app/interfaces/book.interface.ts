type SearchTerm = string;
type Year = number;

// "O Union Type é o 'OU' lógico.
type StatusLivro = 'disponível' | 'emprestado' | 'em manutenção'; 

export interface Book {
  title: string;
  author: string;
  publishDate: string;
  publisher: string;
  coverUrl?: string; // Propriedade opcional
  available?: boolean; // Propriedade opcional
  status?: StatusLivro; // Propriedade opcional
}

// Apenas um exemplo do curso (não é utilizado no nosso app)
export interface BookWithID extends Book {
  id?: number;
  outraCoisa?: string;
}

export interface DigitalBook extends Book {
  url: string;
}

// Exemplo de Partial (Utility Type) + Uso
type BookUpdate = Partial<Book>;
const dadosParaAtualizar: BookUpdate = { coverUrl: 'nova-capa.jpg' };

// Exemplo de Partial (Utility Type) + Uso
type BookCreation = Required<Book>;
// const dadosParaCriacao: BookCreation = { coverUrl: 'nova-capa.jpg' }; // Vai dar erro
