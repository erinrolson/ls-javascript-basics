/* Add a qux property with value 3 to the myObj object we created in the 
previous exercise. Now, examine the following code snippets:
*/

// Create a new object named myObj that uses myProtoObj as its prototype.
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// how will the following code blocks differ?
let objKeys = Object.keys(myObj); // Object.keys() only gives an objects OWN keys
objKeys.forEach(function(key) {
  console.log(key); // logs qux to console
});

// vs.
for (let key in myObj) {
  console.log(key); // logs foo, bar, qux to console 
}
