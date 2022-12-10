function copyObj(obj, keyArr){
  let newObj = Object.assign({},obj);
  if (!keyArr){ // no key array provided
    return newObj; // return copy of object
    }
  for (let key in obj){ // loop through all obj properties
    if (!keyArr.includes(key)){
      delete newObj[key];
    } 
  } return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }