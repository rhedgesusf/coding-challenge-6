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

console.log(`Bonus: $${calculateBonus(10000, "Excellent")}`);
//Another example
console.log(`Bonus: $${calculateBonus(1000, "Average")}`);

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
    
console.log(`Subscription Cost: $${calculateSubscriptionCost("Enterprise", 24, 20)}`);
// Another Example
console.log(`Subscription Cost: $${calculateSubscriptionCost("Basic", 6, 5)}`);

///////////////////////////////
// Task 5: Returning Values ///
///////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Returning Values");

const convertCurrency = (amount, exchangeRate) => amount * exchangeRate;

console.log(`Converted Currency: $${convertCurrency(1000, 5.20)}`);
// Another Example
console.log(`Converted Currency: $${convertCurrency(786, .97)}`);




