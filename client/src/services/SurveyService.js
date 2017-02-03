import 'whatwg-fetch';
import config from '../configs/config';

class SurveyService {

  static getSurveyResults(url) {
    return fetch(config.base_url + url, {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
        return json;
    });
  }
}

export default SurveyService;
