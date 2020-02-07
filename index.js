function test (val) {
    return val + 1;
}

exports.add = function () {
    const vv = test() +1;
    if (vv === 100500) {
        return 1;
    }
    return 2 + 2;
};