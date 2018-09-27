function find(array, criteriaFn) {
  
  let current = array        //Keeps track of element we are searching now
  let next = []              // Keeps track of elements we have yet searched
 
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    } // Search Nested Arrays
    if (Object.isObject(current)) {
      for (let j = 0; j < current.length; j++) {
        next.push(current[j])
    }
    current = next.shift()
  }  // Search Nested Objects
  return null   // If not found, return null
 }
}    //Breadth-First Search Algorithm