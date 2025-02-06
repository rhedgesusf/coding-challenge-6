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
