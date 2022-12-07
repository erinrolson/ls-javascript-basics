function getFibonacci(position){
  //console.log(position);
  if (position === 0 || position === 1){
    return position;
  } else {
   return getFibonacci(position - 1) + getFibonacci(position - 2);
  }
}

console.log(getFibonacci(3));