class localStorageApi {

  static getUsers() {
    const existingUsers = JSON.parse(localStorage.getItem("storedUser")) || [];
    return existingUsers;
  }

  static getUser(userId) {
    const existingUsers = localStorageApi.getUsers();
    return existingUsers.find(storedUser => { storedUser.userId === userId; });
  }

  static createUser(newUserProfile) {
    const existingUsers = localStorageApi.getUsers();
    existingUsers.push(newUserProfile);
    localStorage.setItem("storedUser", JSON.stringify(existingUsers));
    return existingUsers;
  }

  static genId() {
    return '' + Math.random().toString(9).substr(2, 3);
  }

  static updateUser(id) {
    // var matchingUser = localStorageApi.getUser(id);
    // console.log(matchingUser);
  }

  static replaceUser(id, newUser) {
  }

  // static deleteUser(id) {
  //   const deleteThisUser = localStorageApi.getUser(id);
  //   // var keyIndex = deleteThisUser.key
  //   return localStorage.removeItem("storedUser" === deleteThisUser);
  // }

  static deleteUsers() {
    localStorage.clear();
  }


  static validateUser() {
  }
}
export default localStorageApi;



 

  
