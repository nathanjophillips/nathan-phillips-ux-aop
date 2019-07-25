class localStorageApi {
 
  static createUser(newUser) {
      localStorage.setItem("newUser", JSON.stringify(newUser));
      var existingUsers = localStorageApi.getUsers();
      existingUsers.push(newUser);
      localStorage.setItem("allStoredUsers", JSON.stringify(existingUsers));
      // console.log("createUser() : ", existingUsers);
      return existingUsers;
  }

  static getUser(id) {
      var existingUsers = localStorageApi.getUsers();
      var found = existingUsers.find(function(allStoredUsers) {
          return allStoredUsers.id === id;
      });
      // console.log(found);
      return found;
  }

  static getUsers() {
     var existingUsers = JSON.parse(localStorage.getItem("allStoredUsers"));
     if(existingUsers == null) existingUsers = [];
  //    console.log("getUsers() : ", existingUsers);
     return existingUsers;
  }

  genId() {
      return '' + Math.random().toString(9).substr(2, 3);
  }
 
  static updateUser(id) {
      // var matchingUser = localStorageApi.getUser(id);
      // console.log(matchingUser);

  }

  static deleteUser(id) {
      var deleteThisUser = localStorageApi.getUser(id);

      console.log(deleteThisUser);
      return localStorage.removeItem("allStoredUsers" === deleteThisUser);
  }

  static deleteUsers() {
      localStorage.clear();
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
