
var timer;//
function debounce(fn,delay) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    fn();  
  }, delay);
}
1
2
3
4
debounce(function(){
    console.log(1)
},1000)
debounce(function(){
    console.log(2)
},1000)
debounce(function(){
  console.log(3)
},1000)