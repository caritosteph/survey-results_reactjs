class Utils {
  static percentage_rate(rate){
    let percentage = Math.floor(rate * 100);
    return percentage;
  }

  static average_rating(ratings){
    let sum = 0;
    let count_rating = 0;
    let average = 0;
    ratings.forEach(rating => {
      if(rating.response_content){
        sum += parseInt(rating.response_content);
        count_rating += 1;
      }
    });
    average = (sum/count_rating).toFixed(1);
    return average;
  }
}

export default Utils;
