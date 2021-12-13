// npm publish 之前要更新版本号
const { types } = require('./constant/types.js')
function sf () {
    console.log('hello sff!')
}

function sf1 () {
    console.log('hello sff1!')
}

const debounce = (fn, delay = 500) => {
    let timer = null;
    return function () {
        const context = this, args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
}

const throttle = (fn, delay = 500) => {
    let timer = null;
    let startTime = Date.now();
    return function () {
        const context = this, args = arguments;
        let remaining = delay - (Date.now() - startTime);
        clearTimeout(timer);
        if (remaining <= 0) {
            fn.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}

const typeOf = (data) => {
    const type = Object.prototype.toString.call(data);
    return types[type];
}

const promisify = (fn) => {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return new Promise((resolve, reject) => {
            args.push((err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
            fn.apply(null, args);
        })
    }
}

module.exports = {
    sf,
    sf1,
    debounce,
    throttle,
    typeOf
}