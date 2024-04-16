/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Object to keep track of the total spent per category
  const totals = {};

  // Iterate over each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If the category already exists in totals, add to its total
      // Otherwise, initialize it
      if (totals[category]) {
          totals[category] += price;
      } else {
          totals[category] = price;
      }
  });

  // Convert the totals object to an array of objects with the required format
  const result = Object.keys(totals).map(category => ({
      category: category,
      totalSpent: totals[category]
  }));

  return result;
}

// Example usage:
const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 15, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656134400000, price: 30, category: 'Food', itemName: 'Sushi'},
  { id: 3, timestamp: 1656076800000, price: 9, category: 'Stationery', itemName: 'Notebook' },
  { id: 4, timestamp: 1656076800000, price: 5, category: 'Stationery', itemName: 'Pen' },
  { id: 3, timestamp: 1656019200000, price: 15, category: 'Clothing', itemName: 'T-Shirt'},
  { id: 4, timestamp: 1656364800000, price: 30, category: 'Electronics', itemName: 'Headphones' },
  { id: 5, timestamp: 1656105600000, price: 25, category: 'Clothing', itemName: 'Jeans' }
];

console.log(calculateTotalSpentByCategory(transactions));
// Output:
// [
//   { category: 'Food', totalSpent: 25 },
//   { category: 'Stationery', totalSpent: 14 }
// ]

module.exports = calculateTotalSpentByCategory;
