import fs from "fs-promise";

class Utils {

  static readJSONFile(res, filename) {
    return fs.readJson(filename)
      .then(data => {
        return Utils.sendData(res, true, data);
      })
      .catch(error => {
        let messageError = error ? error : "Unexpected error";
        return  Utils.sendData(res, false, messageError);
      });
  }

  static sendData(res, value, data) {
    let json = {};
    value ? json = {data: data, success: value} : json = {msg: data, success: value};
    res.setHeader("Content-Type", "application/json");
    res.send(json);
  }
}

export default Utils;
