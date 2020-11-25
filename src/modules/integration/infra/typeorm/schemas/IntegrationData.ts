import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
} from 'typeorm'
import IIntegrationDataDTO from '../../../dtos/IIntegrationDataDTO'


@Entity('integration-test')
class IntegrationData {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  data: Date

  @Column()
  cliente: {
    nome: string,
    endereco: string,
    email: string,
  }

  @Column()
  volume: {
    servico: string
  }

  @Column()
  items: {
    item: {
      codigo: string,
      descricao: string,
      qtde: number,
      vlr_unit: number
    }
  }


  @CreateDateColumn()
  created_at: Date
}


export default IntegrationData
