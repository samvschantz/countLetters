function characterCounting(str){

  var result = {}

  var lowerCaseString = str.split(' ').join('').toLowerCase()

  console.log(lowerCaseString)

  for (i = 0; i < lowerCaseString.length; i++){
    if (result[lowerCaseString.charAt(i)] === undefined){
      result[lowerCaseString.charAt(i)] = []
    }
    if (result[lowerCaseString.charAt(i)].length >= 0){
      result[lowerCaseString.charAt(i)].push(i)
    }
  }
  return result
}

characterCounting('Lighthouse in the house')
