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
interface BookWithID extends Book {
  id: number;
}

export interface DigitalBook extends Book {
  url: string;
}