import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
} from 'typeorm'
import IIntegrationDataDTO from '../../../dtos/IIntegrationDataDTO'


@Entity()
class IntegrationData {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  status: number

  @Column()
  statusText: string

  @Column()
  data: {
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

  @CreateDateColumn()
  created_at: Date
}


export default IntegrationData
