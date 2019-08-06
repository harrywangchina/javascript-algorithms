function time_my_script(script) {
    var start = new Date();
    eval(script + "()");
    return new Date() - start;
}

function test() {
    for(var i = 0; i < 1000; i++) {
        console.log(i);
    }
}
// var time = time_my_script('test');
// console.log("spend: " + time);
merge();
function merge() {
    var result = _mergeSortRec([1, 6, 2, 4]);
    console.log(result);
}
function _mergeSortRec(array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    return _merge(_mergeSortRec(left), _mergeSortRec(right));
}
function _merge(left, right) {
    var result = [],
        il = 0,
        ir = 0
        leftLength = left.length,
        rightLength = right.length;
    while(il < leftLength && ir < rightLength) {
        if (left[il] > right[ir]) {
            result.push(right[ir++]);
        } else {
            result.push(left[il++]);
        }
    }
    while(il < leftLength) {
        result.push(left[il++]);
    }
    while(ir < rightLength) {
        result.push(right[ir++]);
    }
    return result;
}