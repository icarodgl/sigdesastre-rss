export class grupoAcesso {
  readonly nome?: string;
}

export class tipoFonte {
  readonly nome?: string;
}

export interface Fonte {
  readonly link: string | undefined;

  readonly nome?: string | undefined;

  readonly descricao?: string | undefined;

  readonly tipoFonte?: tipoFonte | undefined;
}
export interface Noticia {
  readonly link: string | undefined;
  readonly descricao?: string | undefined;
  readonly dataPublicacao?: string | undefined;
  readonly titulo?: string | undefined;
  readonly conteudo?: string | undefined;
  readonly dataCriacao?: string | undefined;
  readonly dataAtualizacao?: string | undefined;
  readonly fonte?: Fonte | undefined;
  readonly midias?: [] | undefined;
  readonly grupoAcesso?: grupoAcesso | undefined;
  readonly descritores?: [] | undefined;
}
