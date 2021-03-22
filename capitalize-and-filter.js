const capitalizeAndFilter = (array, filterBy) => {
  const result = array
    .filter((element) => element.charAt(0) !== filterBy)
    .map((element) => element.toUpperCase());
  return result;
};

module.exports = capitalizeAndFilter;
