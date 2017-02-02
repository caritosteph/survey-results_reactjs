import fs from 'fs';

class Utils {

  static readJSONFile(filename) {
    return new Promise ((resolve, reject) => {
      fs.readFile(filename, (error, data) => {
        if(!error){
          resolve(JSON.parse(data));
        }else{
          reject('Unexpected error');
        }
      });
    });
  }

  static send_data(res, value, data) {
    let json = {};
    value ? json = {data: data, success: value} : json = {msg: data, success: value};
    res.setHeader('Content-Type', 'application/json');
    res.send(json);
  }
}

export default Utils;
