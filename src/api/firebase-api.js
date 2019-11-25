import firebase from "firebase/app";
import "firebase/database";

class firebaseApi {

  static getUsers() {
    const ref = firebase.database().ref('users');
    const userList = [];
    ref.once('value',function(snap) {
      snap.forEach(function(item) {
          var itemVal = item.val();
          userList.push(itemVal);
      })});
    console.log("getUsers() userList === ", userList);
    return userList;
  }

  static getUser(userId) {
    const userList = firebaseApi.getUsers();
    return userList.find(users =>  users.child.id === userId );
  }
  
  static createUser(newUserProfile) {
    firebase.database().ref('users/').push(newUserProfile);
    firebaseApi.getUsers();
  }

  static genId() {
    return '' + Math.random().toString(9).substr(2, 3);
  }

  static updateUser(userId, newUserData) {
    const user = firebaseApi.getUser(userId);

    // firebase.database().ref('users/' + userId).set({newUserData});
    console.log("updateUser() ran!!!     CurrentArray being returned:", existingUsers);
  }

  static deleteUser(userId) {
    const user = firebaseApi.getUser(userId);
    console.log("deleting this user!", user);
    firebaseApi.database().ref('users/').child.child.remove(user);
    firebaseApi.getUsers();
  }

  static deleteAll() {
    firebase.database().ref('/').remove();
    console.log("daleteAll() ran!!!     CurrentArray being returned:", existingUsers);
  }
}
export default firebaseApi;