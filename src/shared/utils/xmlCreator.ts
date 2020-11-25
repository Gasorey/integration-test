import xml2js from 'xml2js'

interface JsonObject {
root: {
  data: [
    string
  ],
  cliente: [
    {
      nome: [
        string
      ]
      endereco: [
        string
      ]
      email: [
        string
      ]
    }
  ],
  volume: [
    {
      servico: [
        string
      ]
    }
  ],
  items: [
    {
      item: [
        {
          codigo: [
            string
          ],
          descricao: [
            string
          ],
          qtde: [
            string
          ],
          vlr_unit: [
            string
          ]
        }
      ]
    }
  ]
}
}

export const buildXML = (data: object) => {
  const xmlBuilder = new xml2js.Builder()
  const xml = xmlBuilder.buildObject(data)
  return xml
}

export const XMLtoJSON = async (data: string) => {
  const jsonBuilder = new xml2js.Parser()

  const json = await jsonBuilder.parseStringPromise(data)

  const jsonStructured = json.map((j: JsonObject) => {
    const correctStructure = {
      data: j.root.data[0],
      cliente: {
        nome: j.root.cliente[0].nome[0],
        endereco: j.root.cliente[0].endereco[0],
        email: j.root.cliente[0].email[0]
      },
      volume: {
        servico: j.root.volume[0].servico[0]
      },
      items: {
        item:{
          codigo: j.root.items[0].item[0].codigo[0],
          descricao: j.root.items[0].item[0].descricao[0],
          qtde: Number(j.root.items[0].item[0].qtde[0]),
          vlr_unit: Number(j.root.items[0].item[0].vlr_unit[0]),
        }
      }
    }
    return correctStructure
  })

  return jsonStructured
}

