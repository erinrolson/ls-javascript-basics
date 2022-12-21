
function cloneCreate(obj) {
  return Object.create(obj);
}

function cloneAssign(obj) {
  return Object.assign({}, obj);
}

let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

let objCopyCreate = cloneCreate(obj);
console.log(objCopyCreate); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

let objCopyAssign = cloneAssign(obj);
console.log(objCopyAssign); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }