const capitalize = (string) => {
  if (typeof string !== 'string') throw new Error('Invalid Parameter');
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalize;
