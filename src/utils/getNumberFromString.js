const getNumberFromString = (str) => {
  return parseInt(str.match(/\d+/g))
}

export { getNumberFromString }
