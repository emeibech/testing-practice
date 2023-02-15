const analyzeArray = (array) => ({
  average: array.reduce((total, current) => total + current, 0) / array.length,
  length: array.length,
  min: array.reduce((a, b) => Math.min(a, b)),
  max: array.reduce((a, b) => Math.max(a, b)),
});

export default analyzeArray;
