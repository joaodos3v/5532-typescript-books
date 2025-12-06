// Sintaxe mais limpa do TypeScript no constructor
class LivroSimplificado {
  constructor(
    public title: string,
    private author: string,
    protected id: number
  ) {}

  /**
   * O resto do código segue igual...
   */
}