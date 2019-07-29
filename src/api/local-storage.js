class localStorageApi {

  static getUsers() {
    const existingUsers = JSON.parse(localStorage.getItem("storedUser")) || [];
    return existingUsers;
 }
 
  static createUser(newUser) {
    const existingUsers = localStorageApi.getUsers();
    existingUsers.push(newUser);
    localStorage.setItem("StoredUser", JSON.stringify(existingUsers));
    return existingUsers;
  }

  static getUser(userId) {
    const existingUsers = localStorageApi.getUsers();
    const found = existingUsers.find(StoredUser => {
      return StoredUser.id === id;
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

  static replaceUser(id, newUser) {
  }

  static deleteUser(id) {
    var deleteThisUser = localStorageApi.getUser(id);
    // var keyIndex = deleteThisUser.key
    return localStorage.removeItem("StoredUser" === deleteThisUser);
  }

  static deleteUsers() {
    localStorage.clear();
  }


  static validateUser() {
  }
}
export default localStorageApi;

  

 

  
