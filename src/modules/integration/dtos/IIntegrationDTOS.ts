export interface IIntegrationDTO {
  data: string,
  cliente: {
    nome: string,
    endereco: string,
    email: string,
  },
  volume: {
    servico: string
  },
  items: {
    item: {
      codigo: string,
      descricao: string,
      qtde: number,
      vlr_unit: number
    }
  }
}

export interface IAggregateDTO {
  data: string,
  value: number,
}

