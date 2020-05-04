function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

// function addPropertyV2(userData, userId) {
//   Object.assign(userData, { id: userId });
//   return userData;
// }

const addPropertyV2 = (userData, userId) =>
  Object.assign(userData, { id: userId });

const user = { name: "test", age: 20 };

const addPropertyV3 = (userData, userId) =>
  Object.assign({}, userData, { id: userId });

function addPropertyV4userData, userId) {
  return { ...userData, id: userId };
}
