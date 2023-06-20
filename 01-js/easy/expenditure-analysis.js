/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for(var i = 0; i < transactions.length; i++) {
    let ans = -1;
    for(var j = 0; j < result.length; j++) {
      if(result[j].category === transactions[i].category) {
        ans = j;
        result[j].total_amount_spend += transactions[i].price;
      }
    }
    if(ans == -1) {
      let trans = {category:transactions[i].category,
                  total_amount_spend:transactions[i].price
                  };
                  result.push(trans);
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
