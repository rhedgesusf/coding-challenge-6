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
