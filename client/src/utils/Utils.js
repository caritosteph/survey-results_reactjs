class Utils {
  static percentage_rate(rate){
    let percentage = Math.floor(rate * 100) + '%';
    return percentage;
  }

  static average_rating(ratings){
    let sum = 0;
    let count_rating = ratings.length;
    let average = 0;
    ratings.forEach(rating => {
      if(rating.response_content){
        sum += parseInt(rating.response_content) ;
      }
    });
    average = Math.round((sum/count_rating)*10)/10;
    return average;
  }
}

export default Utils;
