function word(){
   return alert("hello world!");
}
function sum(a,b){
    return a+b;
}
function min(a,b){
    return a-b;
}
function umn(a,b){
    return a*b
}

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }