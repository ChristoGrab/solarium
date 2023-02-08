const normalizeSolarSystemData = (data) => {
  let dataObject = {}
  
  data.bodies.forEach(body => {
    dataObject[body.englishName] = body
  })

  return dataObject

}

export default normalizeSolarSystemData;
