async function promisifyArray(arr, func) {
  return await Promise.all(arr.map((el) => func(el)));
}

module.exports = {
  async everyAsync(arr, func) {
    const resultList = await promisifyArray(arr, func);

    return resultList.every((el) => !!el);
  },

  async mapAsync(arr, func) {
    return promisifyArray(arr, func);
  }
}