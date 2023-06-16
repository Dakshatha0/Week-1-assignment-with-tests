/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const Transaction = {};
  for(let key in transactions) {
    Transaction.push({transactions[category], "-", transactions[price]});
  }
  return Transaction;
}

const transactions = [{id:'nirma', category: 'washing powder', 
                        price: 200, timestamp: 20123321},
                       {id:'nivea', category: 'body wash', 
                       price: 400, timestamp: 20123211}
                      ]
console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
