export class grupoAcesso {
  nome?: string;
}

export class tipoFonte {
  id?: number;
  nome?: string;
}

export interface Fonte {
  link: string | undefined;

  nome?: string | undefined;

  descricao?: string | undefined;

  tipoFonte?: tipoFonte | undefined;
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
