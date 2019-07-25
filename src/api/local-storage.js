class localStorageApi {

  static getUsers() {
    var existingUsers = JSON.parse(localStorage.getItem("allStoredUsers")) || [];
    console.log("getUsers() current existing stored users = ", existingUsers);
    return existingUsers;
 }
 
  static createUser(newUser) {
    const databaseEndpoints = { ALL_USERS: 'allStoredUsers' }
    var existingUsers = localStorageApi.getUsers();
    localStorage.setItem(databaseEndpoints.ALL_USERS, JSON.stringify(existingUsers.push(newUser)));
    console.log("createUser() new current existing users = ", existingUsers);
    return existingUsers;
  }

  static getUser(id) {
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




















}

export default localStorageApi;


  // static replaceUser(id, newUser) {

  // }

 

  // static deleteUsers() {
  //     localStorage.clear();
  // }

  // static validateUser(user) {

  // }
