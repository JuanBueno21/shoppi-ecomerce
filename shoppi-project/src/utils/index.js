/**
 * this function calculates total price of a new order
 * @param {Array} products cartProducts: array of object
 * @returns {number} total Price
 */

export const totalPrice = (products) => {
  let sum = 0
  products.forEach(products => sum += products.price)
  return sum
}