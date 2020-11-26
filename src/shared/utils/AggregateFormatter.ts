import sort from 'fast-sort'
interface AggragateArray {
 _id: string,
 total: number
}


const AggregateFormatter = (obj:AggragateArray[]) => {
  const newFormat = obj.map(aggregate => {
    const newObj = {
      data: aggregate._id,
      total_negociado: `R$ ${aggregate.total}`
    }
    return newObj
  })
  sort(newFormat).asc([
    "data"
  ])
  return newFormat

}

export default AggregateFormatter
