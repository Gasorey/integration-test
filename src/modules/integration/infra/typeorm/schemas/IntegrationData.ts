import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  ObjectIdColumn,
} from 'typeorm'

@Entity('integrationData')
class IntegrationData {
  @ObjectIdColumn()
  id: ObjectID

  @Column({default: null})
  content: object

  @CreateDateColumn()
  created_at: Date
}


export default IntegrationData
