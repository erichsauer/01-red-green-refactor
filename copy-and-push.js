const copyAndPush = (array, toPush) => {
  const result = [...array];
  result.push(toPush);
  return result;
};

module.exports = copyAndPush;
