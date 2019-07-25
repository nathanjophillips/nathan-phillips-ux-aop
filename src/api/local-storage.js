class localStorageApi {

  static getUsers() {
    var existingUsers = JSON.parse(localStorage.getItem("allStoredUsers")) || [];
    console.log("getUsers() current existing stored users = ", existingUsers);
    return existingUsers;
 }
 
  static createUser(newUser) {
    var existingUsers = localStorageApi.getUsers();
    existingUsers.push(newUser);
    localStorage.setItem("allStoredUsers", JSON.stringify(existingUsers));
    console.log("createUser() new current existing users = ", existingUsers);
    return existingUsers;
  }

  static getUser(userId) {
    var existingUsers = localStorageApi.getUsers();
    var found = existingUsers.find(allStoredUsers => {
      return allStoredUsers.id === id;
    });
    return found;
  }

  static genId() {
    return '' + Math.random().toString(9).substr(2, 3);
  }
 
  static updateUser(id) {
    // var matchingUser = localStorageApi.getUser(id);
    // console.log(matchingUser);
  }

  static deleteUser(id) {
    var deleteThisUser = localStorageApi.getUser(id);
    // var keyIndex = deleteThisUser.key
    console.log("deleteUser() the user to delete is =", deleteThisUser);
    return localStorage.removeItem("allStoredUsers" === deleteThisUser);
  }

  static deleteUsers() {
    localStorage.clear();
    consol.log("deleteUsers() all users deleted = ", localStorageApi.getUsers());
  }

  // static deleteUsers() {
  //     localStorage.clear();
  // }

  // static validateUser(user) {

  // }
}

export default localStorageApi;


  // static replaceUser(id, newUser) {

  // }

 

  
