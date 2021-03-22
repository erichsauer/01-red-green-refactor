const copyAndPush = (array, toPush) => {
  // const result = array.slice();
  const result = array;
  array.push(toPush);
  return result;
};

module.exports = copyAndPush;
