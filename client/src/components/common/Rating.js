import React, {PropTypes} from 'react';

const Rating = ({rating}) => {

  const rating_stars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if( i < parseInt(rating.rating)){
        stars.push(<i key= {i} className = "fa fa-star"/>);
      }else{
        stars.push(<i key= {i} className = "fa fa-star-o"/>);
      }
    }
    return stars;
  };

  return (
    <div className = "rating-stars">
      {
        rating_stars({rating})
      }
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired
};

export default Rating;
