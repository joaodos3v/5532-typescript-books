// O Typescript enxerga dessa forma:  (string | number)[]
const configuracaoIncorreta = ['TypeScript Avançado', 'title'];

// Precisamos: Chave -> Valor

/**
 * Exemplo melhor utilizando Tuplas
 */
// Definindo os campos de busca possíveis
type ChaveDaBusca =  'title' | 'author' | 'publishDate' | 'publisher';

// Tupla para a Configuração de Busca
type ConfiguracaoBusca = [ChaveDaBusca, string];

// Uso correto
const buscaPorTitulo: ConfiguracaoBusca = ['title', 'Angular para Iniciantes'];
const buscaPorAutor: ConfiguracaoBusca = ['author', 'Maria Santos'];

// Uso incorreto (erro de compilação)
const buscaInvalida: ConfiguracaoBusca = ['author', 'Qualquer valor de exemplo']; 