import mongoose from 'mongoose'

const connect = async () => {
  return mongoose.connect('mongodb://localhost:27017/integration-test?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {useNewUrlParser:true})
  .then(()=>{
    console.log('Connected with Mongo')
  })
  .catch((err)=> {
    console.log('Failed to connect')
  })
}

export default connect

