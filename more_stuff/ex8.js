function isNotANumber(param){
  if (param !== param){ // NaN is the only value not equal to itself in JS
    return true;
  }
}