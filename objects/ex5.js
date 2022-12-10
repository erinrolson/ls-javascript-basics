// Create a new object named myObj that uses myProtoObj as its prototype.
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

for (let keys in myObj){
  console.log(myObj[keys]);
}