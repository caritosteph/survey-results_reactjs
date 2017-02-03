import React, {PropTypes} from 'react';

const ThemeList = ({themeList}) => {
  return (
    <div>
      {themeList}
    </div>
  );
};

ThemeList.propTypes = {
  themeList: PropTypes.array.isRequired
};

export default ThemeList;
