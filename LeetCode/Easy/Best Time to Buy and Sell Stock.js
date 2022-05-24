// You are given an array prices where prices[i] is the price of a given stock on the ith day.
    // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    // we can find the lowest price and while iterating through the prices array
        // then find the largest in price during the same iteration
    let minPrice = prices[0];
    let maxProfit = 0;
    
    // start with 1 because we would never buy and sell the stock on the same day
        // compare the first index to itself
    for (let i = 1; i < prices.length; i++) {
        //ensure that we have the lowest price at all times
        minPrice = Math.min(prices[i], minPrice);
        // compare the profit we would currently make to what our maxProfit would be and save the higher value
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
};

//expanded for readability
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }

        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    
    return maxProfit;
};