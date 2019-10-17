import firebase from "firebase/app";
import "firebase/database";

class firebaseApi {

  static getUsers() {
    const existingUsers = firebase.database().ref('users/');
    existingUsers.on('value', snap => console.log(snap.val()));
    return existingUsers;
  }

  static createUser(newUserProfile) {
    const existingUsers = firebase.database().ref('users/');
    existingUsers.push(newUserProfile);
  }

  static genId() {
    return '' + Math.random().toString(9).substr(2, 3);
  }

  static updateUser(userId, newUserData) {
    firebase.database().ref('users/' + userId).set({newUserData});
  }

  static deleteUser(userId) {
    const existingUsers = firebase.database().ref('users/').child(userId);
    existingUsers.remove();
  }

  static deleteAll() {
    firebase.database().ref('/').remove();
  }
}
export default firebaseApi;