
/* Задача 1 */

function curry(...theArgs) {
    let sum = theArgs.reduce((previous, current) => {
        return previous + current;
    }, 0);
    const sumFunction = function () {
        for (let i = 0, j = arguments.length; i < j; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    return sumFunction;
}

const curriedFunction = curry(1, 2, 4);
console.log(curriedFunction(3, 4, 5));

//////

function sum2(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    }, 0);
}

function curry2(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
};

const curriedFunction2 = curry2(sum2, 1, 2);
console.log(curriedFunction2(3, 4))


/* Задача 2 */

function counter() {
    let currentCount = 0;
    return {
        inc: function () {
            return currentCount++;
        },
        dec: function () {
            return currentCount--;
        },
        value: function () {
            return currentCount;
        },
    };
}

let iterator = counter();
iterator.inc();
iterator.inc();
iterator.dec();
console.log(iterator.value());





