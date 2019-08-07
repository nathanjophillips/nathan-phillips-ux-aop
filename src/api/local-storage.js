class localStorageApi {

  static getUsers() {
    const existingUsers = JSON.parse(localStorage.getItem("storedUsers")) || [];
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

  static updateUser(userId, newUserData) {
    const existingUsers = localStorageApi.getUsers();
    const newUserProfile = Object.assign(localStorageApi.getUser(userId), newUserData);
    const userKey = existingUsers.findIndex(user => user.id === userId);
    existingUsers.splice(userKey, 1, newUserProfile);
    localStorage.setItem("storedUser", JSON.stringify(existingUsers));
  }

  static replaceUser(userId, newUser) {
    const existingUsers = localStorageApi.getUsers();
    const userKey = existingUsers.findIndex(user => user.id === userId);
    existingUsers.splice(userKey, 1, newUser);
    localStorage.setItem("storedUser", JSON.stringify(existingUsers));
  }

  static deleteUser(userId) {
    const existingUsers = localStorageApi.getUsers();
    const userKey = existingUsers.findIndex(user => user.id === userId);
    existingUsers.splice(userKey, 1);
    localStorage.setItem("storedUser", JSON.stringify(existingUsers));
  }

  static deleteUsers() {
    localStorage.clear();
    const existingUsers = localStorageApi.getUsers();
    localStorage.setItem("storedUser", JSON.stringify(existingUsers));
  }

  static genId() {
    return '' + Math.random().toString(9).substr(2, 3);
  }

  static validateUser(user) {
    const existingUsers = localStorageApi.getUsers();
    const existingIds = existingUsers.map(user => user.id); 
    if (!existingIds.includes(user.id)) {
      return true;
    }
    else {
      console.log("insert attempt failed.  A new id will be generated");
      user.id = localStorageApi.genId();
      localStorageApi.validateUser(user);
    }
  }
}
export default localStorageApi;



 

  
