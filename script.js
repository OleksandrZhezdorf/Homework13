
/* Задача 1 */

function curry(...theArgs) {
    let sum = theArgs.reduce((previous, current) => {
        return previous + current;
    }, 0);
    const sumFunction = function () {
        for (var i = 0, j = arguments.length; i < j; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    return sumFunction;
}

const curriedFunction = curry(1, 2);
console.log(curriedFunction(3, 4));


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

var iterator = counter();
iterator.inc();
iterator.inc();
iterator.dec();
console.log(iterator.value());



