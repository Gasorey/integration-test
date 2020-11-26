export interface IIntegrationDataDTO {
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

export interface IAggregateDataDTO {
  data: string,
  value: number,
}

