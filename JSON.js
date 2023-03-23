let obj1 = {
    name: "person 1",
    age: 5,
};

let obj2 = {
    age: 5,
    name: "person 1",
};

let obj1Keys = Object.keys(obj1).sort();
let obj2Keys = Object.keys(obj2).sort();
if (obj1Keys.length !== obj2Keys.length) {
  console.log(objEqual);
} else {
  let areEqual = obj1Keys.every((key, index) => {
    let objValue1 = obj1[key];
    let objValue2 = obj2[obj2Keys[index]];
    return objValue1 === objValue2;
  });
  if (areEqual) {
    objEqual = "Two Object is Equal";
    console.log(objEqual);
  }
  
}
    