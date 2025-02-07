//////////////////////////////////
// Task 1: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Function Declaration");

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return ((sellingPrice - costPrice) * unitsSold)
}

console.log(`Total Profit: $${calculateProfit(20,30,100)}`)

// Another Example
console.log(`Total Profit: $${calculateProfit(50,70,200)}`)

//////////////////////////////////
// Task 2: Function Expression ///
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Function Expression");

const calculateSalesTax  = function(amount, taxRate) {
    return amount * taxRate;
};


console.log(`Sales Tax: $${calculateSalesTax(100, .07)}`);

//Another Example

console.log(`Sales Tax: $${calculateSalesTax(500, .1)}`);

/////////////////////////////
// Task 3: Arrow Function ///
/////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Arrow Function");

const calculateBonus = (salary, performanceRating) => {
    let bonusRate = 0;
    switch (performanceRating) {
        case "Excellent":
            bonusRate = .2;
            break;
        case "Good":
            bonusRate = .1;
            break;
        case "Average":
            bonusRate = .05;
            break;
    }
    return salary * bonusRate;
}

console.log(`Bonus: $${calculateBonus(1000, "Excellent")}`);
//Another example
console.log(`Bonus: $${calculateBonus(700, "Average")}`);

///////////////////////////////////////
// Task 4: Parameters and Arguments ///
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Arrow Function");

function calculateSubscriptionCost(plan, months, discount = 0) {
    let costPerMonth = 0;
    switch (plan) {
        case "Basic":
            costPerMonth = 10;
            break;
        case "Premium":
            costPerMonth = 20;
            break;
        case "Enterprise":
            costPerMonth = 50;
            break;
    }
    return months * costPerMonth * (1 - discount / 100); 
}
    
console.log(`Subscription Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`);
// Another Example
console.log(`Subscription Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);

///////////////////////////////
// Task 5: Returning Values ///
///////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Returning Values");

const convertCurrency = (amount, exchangeRate) => amount * exchangeRate;

console.log(`Converted Currency: $${convertCurrency(100, 1.1)}`);
// Another Example
console.log(`Converted Currency: $${convertCurrency(250, .85)}`);

///////////////////////////////////
// Task 6: High-Order Functions ///
///////////////////////////////////

console.log("--------------------------------------");
console.log("Task 6: High-Order Functions");

let orders = [200, 600, 1200, 450, 800];

const applyBulkDiscount = (amount) => amount > 500 ? amount * .9 : amount;
let discountOrders = orders.map(applyBulkDiscount);

console.log("Bulk Discount:", discountOrders);

///////////////////////
// Task 7: Closures ///
///////////////////////

console.log("--------------------------------------");
console.log("Task 7: ");








