import React, {PropTypes} from 'react';

const Rating = ({rating}) => {

  const rating_starts = (starts) => {
    let list_starts = [];
    for (let i = 0; i < parseInt(starts); i++) {
      list_starts.push(<i key= {i} className="fa fa-star"/>);
    }
    return list_starts;
  };

  return (
    <div>
      {
        rating_starts({rating})
      }
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired
};

export default Rating;
