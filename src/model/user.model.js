import uniqid from "uniqid";

export default class UserModel {
  constructor(id, name, email, pasword) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.pasword = pasword;
  }

  static addUser(name, email, password) {
    const newUser = new UserModel(uniqid(), name, email, password);
    // console.log(newUser);
    users.push(newUser);
  }

  static getByEmail(email) {
    return users.find((p) => p.email == email);
  }
}

var users = [
  new UserModel("1", "Sanskar", "sanskar1419@gmail.com", "12345678"),
];
