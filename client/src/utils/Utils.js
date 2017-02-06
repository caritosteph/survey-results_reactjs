class Utils {
  static percentageRate(rate){
    let percentage = Math.floor(rate * 100);
    return percentage;
  }

  static averageRating(ratings){
    let sum = 0;
    let countRating = 0;
    let average = 0;
    ratings.forEach(rating => {
      if(rating.response_content){
        sum += parseInt(rating.response_content);
        countRating += 1;
      }
    });
    average = (sum/countRating).toFixed(1);
    return average;
  }
}

export default Utils;
