import React, {PropTypes} from 'react';

const ThemeHeader = ({themeList}) => {
  return (
    <ul className = "nav nav-tabs">
      {
        themeList.map((theme, index) => {

          let href = "#"+theme.name.replace(/ /g, "");
          let active = index === 0 ? 'active' : '';

          return (
            <li className = {active} key= {index} >
              <a href = {href} data-toggle="tab">{theme.name}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

ThemeHeader.propTypes = {
  themeList: PropTypes.array.isRequired
};

export default ThemeHeader;
