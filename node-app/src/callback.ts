function runAfter1s(fn : ()=> void) {
  setTimeout(fn, 1000);
}

runAfter1s(function (){
  console.log("hello world");
})