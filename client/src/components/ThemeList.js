import React, {PropTypes} from 'react';

const ThemeList = ({themeList}) => {
  return (
    <div>
      {themeList}
    </div>
  );
};

ThemeList.propTypes = {
  themeList: PropTypes.object.isRequired
};

export default ThemeList;
