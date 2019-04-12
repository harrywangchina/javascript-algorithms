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