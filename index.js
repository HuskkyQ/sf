// npm publish 之前要更新版本号
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

module.exports = {
    sf,
    sf1,
    debounce,
    throttle
}