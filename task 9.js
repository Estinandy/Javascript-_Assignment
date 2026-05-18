function memoize(fn) {
    let cache = {};

    return function (...args) {
        let key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        let result = fn(...args);
        cache[key] = result;

        return result;
    };
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
