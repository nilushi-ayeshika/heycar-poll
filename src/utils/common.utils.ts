/**
 * @function
 * @param {*} array
 * @returns {percentage of array values}
 */
export const getPercentage = (value: number, array: any) => {
  const sum = array
    .map((item: { votes: any }) => item.votes)
    .reduce((prev: any, curr: any) => prev + curr, 0)
  const percentage = sum === 0 ? '0.00' : parseFloat(((value / sum) * 100).toString()).toFixed(2)
  return percentage
}
