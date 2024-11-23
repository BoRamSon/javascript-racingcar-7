const makeObjectFromArray = (array) => {
  const objectedValue = array.map((array) => {
    return {name :  array, foward : 0};
  })
  return objectedValue;
}

export default makeObjectFromArray;