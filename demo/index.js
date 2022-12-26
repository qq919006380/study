var fn = debounce(() => {
  console.log("执行");
}, 1000);

fn();
fn();
fn();
function debounce(fn, delay) {
  var timer; // 维护一个 timer
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn(); // 用apply指向调用debounce的对象，相当于_this.fn(args);
    }, delay);
  };
}

/**
 * 1.闭包
 * 2.回调函数
 */

