import xml2js from 'xml2js'

export const buildXML = async (data: object) => {
  const xmlBuilder = new xml2js.Builder()
  const xml = await xmlBuilder.buildObject(data)
  console.log(xml)
  return xml

}
