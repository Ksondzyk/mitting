let obj = {};
function bildObject(keyList, valueList) {
  for (var i = 0; i < keyList.length; i++) {
    obj = { ...obj, [keyList[i]]: valueList[i] };
  }
}
function bildObjectV2(keyList, valueList) {
  let obj2 = {};
  let obj = keyList.reduce((acc, key, index) => {
    return { ...acc, [key]: valueList[index] };
  }, obj2);
}

let keys = ["name", "age"];
let values = ["Top", 40];

const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map((arr) => {
      (entry) => Object.assign(entry[1], { id: entry[0] });
    })
    .sort((a, b) => {
      a.age - b.age;
    });
};
