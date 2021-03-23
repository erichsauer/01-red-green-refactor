const capitalizeAndFilter = (array, filterBy) => {
  let result = [];
  for (const item of array) {
    if (item.charAt(0) !== filterBy) {
      result = [...result, item.toUpperCase()];
    }
  }
  return result;
};
// const capitalizeAndFilter = (array, filterBy) => {
//   const result = array
//     .filter((element) => element.charAt(0) !== filterBy)
//     .map((element) => element.toUpperCase());
//   return result;
// };

module.exports = capitalizeAndFilter;
