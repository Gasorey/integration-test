export default interface IIntegrationDataDTO {
data: Date,
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
