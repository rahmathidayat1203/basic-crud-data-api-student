const UserDAO = require("../dao/Users");

class Userservice {
  getAllData() {
    return UserDAO.getAllData();
  }
  getDataById(idTo) {
    const { id } = idTo;
    return UserDAO.getDataById(id);
  }
  createUser(userDto) {
    const {
      firstName,
      lastName,
      Nim,
      Address,
      Faculty,
      Major,
      Email,
      Password,
      Status,
    } = userDto;

    return UserDAO.createUser(
      firstName,
      lastName,
      Nim,
      Address,
      Faculty,
      Major,
      Email,
      Password,
      Status
    );
  }
  loginUser(userDto) {
    const { Email, Password } = userDto;
    return UserDAO.loginUser(Email, Password);
  }
  updateUser(userDto) {
    const {
      id,
      firstName,
      lastName,
      Nim,
      Address,
      Faculty,
      Major,
      Email,
      Password,
      Status,
    } = userDto;

    return UserDAO.updateUser(
      id,
      firstName,
      lastName,
      Nim,
      Address,
      Faculty,
      Major,
      Email,
      Password,
      Status
    );
  }

  deleteUser(idTo) {
    const { id } = idTo;
    return UserDAO.deleteUser(id);
  }
}
module.exports = new Userservice();
