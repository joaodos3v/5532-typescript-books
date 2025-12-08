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

export interface DigitalBook extends Book {
  url: string;
}