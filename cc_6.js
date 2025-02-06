//////////////////////////////////
// Task 1: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Function Declaration");

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return ((sellingPrice - costPrice) * unitsSold)
}

console.log(`Total Profit: $${calculateProfit(100,200,800)}`)

// Another Example
console.log(`Total Profit: $${calculateProfit(1.25,4.99,1500)}`)

//////////////////////////////////
// Task 2: Function Expression ///
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Function Expression");

const calculateSalesTax  = function(amount, taxRate) {
    return amount * taxRate;
};


console.log(`Sales Tax: $${calculateSalesTax(500, .05)}`);

//Another Example

console.log(`Sales Tax: $${calculateSalesTax(1000, .25)}`);

