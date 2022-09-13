const db = require("../models/db/db");
const md5 = require("md5");

class UserDAO {
  async getAllData() {
    return await db("student");
  }
  async getDataById(id) {
    return await db("student").where({ id: id }).first();
  }
  async createUser(
    firstName,
    lastName,
    Nim,
    Address,
    Faculty,
    Major,
    Email,
    Password,
    Status
  ) {
    const date = new Date();
    const data = {
      first_name: firstName,
      last_name: lastName,
      nim: Nim,
      address: Address,
      faculty: Faculty,
      major: Major,
      email: Email,
      password: md5(Password),
      status: Status,
      created_at: date,
    };
    await db("student").insert(data);
    return data;
  }

  async loginUser(Email, Password) {
    return await db("student").where({
      email: Email,
      password: md5(Password),
    });
  }

  async updateUser(
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
  ) {
    const date = new Date();
    const data = {
      first_name: firstName,
      last_name: lastName,
      nim: Nim,
      address: Address,
      faculty: Faculty,
      major: Major,
      email: Email,
      password: Password,
      status: Status,
      updated_at: date,
    };
    return await db("student").where({ id: id }).update(data);
  }

  async deleteUser(id) {
    return await db("student").where({ id: id }).del();
  }
}
module.exports = new UserDAO();
