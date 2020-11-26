import mongoose, {SchemaTypes} from 'mongoose'

mongoose.connection.models

const {String, Number, Date } = mongoose.Schema.Types

const IntegrationDataSchema = new mongoose.Schema({
 data: String,
 cliente: {
   nome: String,
   endereco: String,
   email: String,
 },
 volume: {
   servico: String
 },
 items: {
   item: {
     codigo: String,
     descricao: String,
     qtde: Number,
     vlr_unit: Number
   }
 }},
 {
   timestamps: { createdAt: 'created_at'},
   collection: 'integration_data'
 }
)

const IntegrationDataMongo = mongoose.model('integrationData', IntegrationDataSchema)

export default IntegrationDataMongo

