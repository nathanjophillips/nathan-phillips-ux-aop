class localStorageApi {

  static getUsers() {
    const existingUsers = JSON.parse(localStorage.getItem("storedUser")) || [];
    return existingUsers;
  }

  static getUser(userId) {
    const existingUsers = localStorageApi.getUsers();
    return existingUsers.find(storedUser =>  storedUser.id === userId );
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

  static updateUser(userId, newUserData) {
    const matchingUser = localStorageApi.getUser(userId);
    const newUserProfile = Object.assign(matchingUser, newUserData);
    console.log(newUserProfile);

    const existingUsers = localStorageApi.getUsers();
    const userKey = existingUsers.findIndex(user => user.id === userId);
    console.log(userKey);
    
    existingUsers.splice(userKey, 1, newUserProfile);
    console.log(existingUsers);
    localStorage.setItem("storedUser", JSON.stringify(existingUsers));
  }

  static replaceUser(id, newUser) {
  }

  static deleteUser(userId) {
    const deleteThisUser = localStorageApi.getUser(id);
    // var keyIndex = deleteThisUser.key
    return localStorage.removeItem("storedUser" === deleteThisUser);
  }

  static deleteUsers() {
    localStorage.clear();
  }


  static validateUser() {
  }
}
export default localStorageApi;



 

  
