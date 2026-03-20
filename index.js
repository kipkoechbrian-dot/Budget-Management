/// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
// Function 3: findMaximum
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
    //or simply return Math.max(num1, num2);
}

// Function 4: isPalindrome
function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}
// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(price, discount) {
    let discountamount = price * (discount / 100);
    return price - discountamount;
}
module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};





