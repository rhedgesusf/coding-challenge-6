//////////////////////////////////
// Task 1: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Function Declaration");

// create function to calculate profit
// input parameters are: cost of unit, sell price of unit, and number of units sold
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return ((sellingPrice - costPrice) * unitsSold)
}

console.log(`Total Profit (20,30,100): $${calculateProfit(20,30,100)}`)
console.log(`Total Profit (50,70,200): $${calculateProfit(50,70,200)}`)

//////////////////////////////////
// Task 2: Function Expression ///
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Function Expression");

// create function that calculates sales tax
// input parameters are: total sales amount and taxrate (decimal format)
const calculateSalesTax  = function(amount, taxRate) {
    return (amount * taxRate).toFixed(2);
};

console.log(`Sales Tax: $${calculateSalesTax(100, .07)}`);
console.log(`Sales Tax (500, .07): $${calculateSalesTax(500, .1)}`);

/////////////////////////////
// Task 3: Arrow Function ///
/////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Arrow Function");

// create function for calculating employee bonus
// input parameters are: total salary amount and performanceRating category
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

console.log(`Bonus (1000, "Excellent"): $${calculateBonus(1000, "Excellent")}`);
console.log(`Bonus (700, "Average"): $${calculateBonus(700, "Average")}`);

///////////////////////////////////////
// Task 4: Parameters and Arguments ///
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Arrow Function");

// create a function that calculates subscription cost
// input parameters are: plan type, number of months, and discount percentage (non-decimal)
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
    
console.log(`Subscription Cost ("Basic", 6, 10): $${calculateSubscriptionCost("Basic", 6, 10)}`);
console.log(`Subscription Cost ("Premium", 12, 0): $${calculateSubscriptionCost("Premium", 12, 0)}`);

///////////////////////////////
// Task 5: Returning Values ///
///////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Returning Values");

// create arrow function to convert currency based on exchange rate
const convertCurrency = (amount, exchangeRate) => (amount * exchangeRate).toFixed(2);

console.log(`Converted Currency (100, 1.1): $${convertCurrency(100, 1.1)}`);
console.log(`Converted Currency (250, .85): $${convertCurrency(250, .85)}`);

///////////////////////////////////
// Task 6: High-Order Functions ///
///////////////////////////////////

console.log("--------------------------------------");
console.log("Task 6: High-Order Functions");

// initialize orders array
let orders = [200, 600, 1200, 450, 800];
console.log("Intial orders:", orders);


// create arrow function to apply bulk discount
// only apply discount to order amounts over $500
const applyBulkDiscount = (amount) => amount > 500 ? amount * .9 : amount;

// use map function to apply the function to each item in array
let discountOrders = orders.map(applyBulkDiscount);

console.log("Discount Orders:", discountOrders);

///////////////////////
// Task 7: Closures ///
///////////////////////

console.log("--------------------------------------");
console.log("Task 7: Closures");

// create a closure function that returns another function to add expenses 
// and keep a running total
function createExpenseTracker(){
    let sum = 0;
    
    // return a function that accepts an amount to add to running sum
	return function(amount) {
            sum += amount;
            return sum;
    };
}

// create expense tracker
let tracker = createExpenseTracker();

console.log("Adding 200 to tracker:", tracker(200));
console.log("Adding 150 to tracker:", tracker(150));

//////////////////////////////////////
// Task 8: Recursion in JavaScript ///
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 8: Recursion in JavaScript");

// create a function that determines years to reach promotion level 10
// each promotion level takes 2 years
// use recursive approach to get the number of years
function calculateYearsToPromotion(employeeLevel) {
    let years = 0;
    
    // if employee level is below 10
    // 1) add 2 to the running years count
    // 2) increment the employee level by 1
    // 3) recursive call itself 
    if (employeeLevel < 10){
        years = calculateYearsToPromotion(employeeLevel + 1) + 2;
    }
    
    return years;
}

console.log("Years to Promotion for Employee Level 7:", calculateYearsToPromotion(7));
console.log("Years to Promotion for Employee Level 5:", calculateYearsToPromotion(5));



