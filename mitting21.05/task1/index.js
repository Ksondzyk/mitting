const user = {
  _firstName: "John",
  lastName: "Doe",
  getfullName() {
    return `${this.firstName} ${this.lastName};`;
  },
  setfullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ')
    
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ')
  },
  set firstName(name) {
    if (typeof name === 'string') {
      this._fn= name
    }else {
      console.error('not a string')
    }
  },
  // get firstName(name) {
  //     return this._fn
  // },

};
user._fn = 1;
console.log(user._firstName)
// console.log(user.fullName);
// // user.setfullName('Adam Sendler')
// user.fullName = 'dscdsc Roman';
// console.log(user.fullName)
