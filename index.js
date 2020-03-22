

function mapToNegativize(sourceArray) {
  let neg = []
  for (let i=0; i < sourceArray.length; i++) {
    neg.push(-1 * sourceArray[i])
  }
  return neg
}

function mapToNoChange(sourceArray) {
  let noDelta = []
  for (let i=0; i < sourceArray.length; i++) {
    noDelta.push( sourceArray[i] )
  }
  return noDelta
}

function mapToDouble(sourceArray){
  let dbl = []
  for (let i=0; i < sourceArray.length; i++) {
    dbl.push( sourceArray[i] * 2 )
  }
  return dbl
}

function mapToSquare(sourceArray) {
  let sqrd = []
  for (let i=0; i < sourceArray.length; i++) {
    sqrd.push( sourceArray[i] ** 2 )
  }
  return sqrd
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i=0; i < sourceArray.length; i++) {
    total = total + sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let i=0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false 
    }
  } 
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i=0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      return true 
      
    }
  } 
  return false
}