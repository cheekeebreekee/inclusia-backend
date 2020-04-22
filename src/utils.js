module.exports = {
  async everyAsync(arr, func) {
    const resultList = await Promise.all(arr.map((el) => func(el)))

    return resultList.every((el) => !!el);
  }
}