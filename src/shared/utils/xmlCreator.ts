import xml2js from 'xml2js'

// interface JsonObject {
// root: {
//   data: [
//     string
//   ],
//   cliente: [
//     {
//       nome: [
//         string
//       ]
//       endereco: [
//         string
//       ]
//       email: [
//         string
//       ]
//     }
//   ],
//   volume: [
//     {
//       servico: [
//         string
//       ]
//     }
//   ],
//   items: [
//     {
//       item: [
//         {
//           codigo: [
//             string
//           ],
//           descricao: [
//             string
//           ],
//           qtde: [
//             string
//           ],
//           vlr_unit: [
//             string
//           ]
//         }
//       ]
//     }
//   ]
// }
// }
interface order {
  data: string

  cliente: {
    nome: string,
    endereco: string,
    email: string,
  },
  volume: {
    servico: string,
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

export const buildXML = (data: object) => {
  const xmlBuilder = new xml2js.Builder()
  const xml = xmlBuilder.buildObject(data)
  return xml
}

export const XMLtoJSON = async (data: string) => {
  const jsonBuilder = new xml2js.Parser()

  const json = await jsonBuilder.parseStringPromise(data)

  console.log(json)

  const jsonStructured = {
    data: json.root.data[0],
      cliente: {
        nome: json.root.cliente[0].nome[0],
        endereco: json.root.cliente[0].endereco[0],
        email: json.root.cliente[0].email[0]
      },
      volume: {
        servico: json.root.volume[0].servico[0]
      },
      items: {
        item:{
          codigo: json.root.items[0].item[0].codigo[0],
          descricao: json.root.items[0].item[0].descricao[0],
          qtde: Number(json.root.items[0].item[0].qtde[0]),
          vlr_unit: Number(json.root.items[0].item[0].vlr_unit[0]),
        }
      }
  }


  return jsonStructured
}

