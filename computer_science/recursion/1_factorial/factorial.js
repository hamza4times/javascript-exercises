const factorial = function(n, total = 1) {
    if(n < 0 || n % 1 != 0 || typeof n === "string" || n.constructor === Array){
        return undefined;
    }
    return n === 0 ? total : factorial(n-1, total * n);
};

console.log(factorial(5));

// Do not edit below this line
module.exports = factorial;