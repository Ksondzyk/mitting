//input :arr,arr
//return arr

// algo
// use map to iterate arrElement
//if user is Admin matk true if not map false
function markAdmins(user, ids) {
  return user.map((user) => {
    let isAdmin = ids.includes(user.id);
    return { ...user, isAdmin };
  });
}
