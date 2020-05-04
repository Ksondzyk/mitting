// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }

// // function addPropertyV2(userData, userId) {
// //   Object.assign(userData, { id: userId });
// //   return userData;
// // }

// const addPropertyV2 = (userData, userId) =>
//   Object.assign(userData, { id: userId });

// const user = { name: "test", age: 20 };

// const addPropertyV3 = (userData, userId) =>
//   Object.assign({}, userData, { id: userId });

// function addPropertyV4userData, userId) {
//   return { ...userData, id: userId };
// }

const user = {
  name: "Tom",
};

const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};
const result = addPropertyV1(user, "12345678");
console.log(result);

const addPropertyV2 = (userData, userId) => {
  return Object.assign(userData, { id: userId });
};
const result2 = addPropertyV2(user, "1234567");
console.log(result2);

const addPropertyV3 = (userData, userId) => {
  const user2 = { ...userData, id: userId };
  return user2;
};
const result3 = addPropertyV3(user, "1234567");
console.log(result3);

const addPropertyV4 = (userData, userId) => {
  const user3 = { ...userData, id: userId };
  return user3;
};
const result4 = addPropertyV4(user, "1234567");
console.log(result4);
