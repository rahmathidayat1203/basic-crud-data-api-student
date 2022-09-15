const Userservice = require("../services/Users");
const validators = require("../controller/validation/UsersValidation");

class Usercontroller {
  async getAllData(request, response) {
    try {
      const data = await Userservice.getAllData();
      response.json({
        status: 200,
        message: "success",
        data: data,
      });
    } catch (error) {
      response.json({
        status: 200,
        message: "Oops Insternal Server Error",
        error: error,
      });
    }
    response.end();
  }

  async getDataById(request, response) {
    try {
      const dataById = await Userservice.getDataById(request.params);
      response.json({
        status: 200,
        message: "success",
        data: dataById,
      });
    } catch (error) {
      response.json({
        status: 200,
        message: "Oops Insternal Server Error",
        error: error,
      });
    }
    response.end();
  }

  async createUser(request, response) {
    try {
      const validation = await validators.validationRegister(request.body);
      const emailCheck = await validators.isEmailUsed(request.body.Email);
      if (validation.error) {
        response.json({
          status: 200,
          message: "valdation input error check",
          data: validation.error.message,
        });
      } else {
        if (emailCheck["count(*)"] > 0) {
          response.json({
            status: 200,
            message: "validation email taken",
            data: `Email => ${request.body.Email} Has Been Taken`,
          });
        } else {
          const dataUser = await Userservice.createUser(request.body);
          response.json({
            status: 200,
            message: "students account created successfully",
            data: dataUser,
          });
        }
      }
    } catch (err) {
      console.log(err);
      response.json({
        status: 500,
        message: "Ooops Internal Server Error",
      });
    }
    response.end();
  }

  async loginUser(request, response) {
    try {
      const validation = await validators.validationLogin(request.body);
      if (validation.error) {
        response.send(validation.error.message);
      } else {
        const dataUser = await Userservice.loginUser(request.body);
        const data = JSON.parse(JSON.stringify(dataUser));
        if (data.length > 0) {
          response.json({
            status: 200,
            message: "login successfully",
          });
        } else {
          response.json({
            status: 201,
            message: "login not successfully",
          });
        }
      }
    } catch (err) {
      response.json({
        status: 500,
        message: "Oops Internal Server Error",
        error: err,
      });
    }
    response.end();
  }

  async updateUser(request, response) {
    try {
      const data = await Userservice.updateUser(request.body);
      response.json({
        status: 200,
        message: "Data Update Successfully",
        data: `Data => ${data}`,
      });
      response.end();
    } catch (err) {
      response.json({
        status: 200,
        message: "update data not successfully",
        data: `Data => ${data}`,
      });
    }
  }

  async deleteUser(request, response) {
    const data = await Userservice.deleteUser(request.params);
    if (data == 1) {
      response.json({
        status: 200,
        statusCallBack: data,
        message: "success",
      });
    } else {
      response.json({
        status: 201,
        statusCallBack: data,
        message: "not success",
      });
    }
    response.end();
  }
}

module.exports = new Usercontroller();
