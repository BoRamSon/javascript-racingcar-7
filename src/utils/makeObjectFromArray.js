const makeObjectFromArray = (array) => {
  const objectedValue = array.map((array) => {
    return {name :  array, forward : 0};
  })
  return objectedValue;
}

export default makeObjectFromArray;