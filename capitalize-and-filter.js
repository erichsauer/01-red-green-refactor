const capitalizeAndFilter = (array, filterBy) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.charAt(0) === filterBy) return result;
    result.push(element.toUpperCase());
  }
  return result;
};

module.exports = capitalizeAndFilter;
