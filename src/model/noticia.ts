export class grupoAcesso {
  readonly nome?: string;
}

export class tipoFonte {
  readonly id?: number;
  readonly nome?: string;
}

export interface Fonte {
  readonly link: string | undefined;

  readonly nome?: string | undefined;

  readonly descricao?: string | undefined;

  readonly tipoFonte?: tipoFonte | undefined;
}
export interface Noticia {
  link: string | undefined;
  descricao?: string | undefined;
  dataPublicacao?: string | undefined;
  titulo?: string | undefined;
  conteudo?: string | undefined;
  dataCriacao?: string | undefined;
  dataAtualizacao?: string | undefined;
  fonte?: Fonte | undefined;
  midias?: [] | undefined;
  grupoAcesso?: grupoAcesso | undefined;
  descritores?: [] | undefined;
}
