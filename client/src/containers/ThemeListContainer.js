import React, {Component, PropTypes} from 'react';
import ThemeList from '../components/ThemeList';
import Theme from '../components/Theme';

class ThemeListContainer extends Component {

  constructor (props) {
    super(props);
    this._retrieveThemes = this._retrieveThemes.bind(this);
  }

  _retrieveThemes () {
    let {themeList} = this.props;
    return themeList.map((theme, index) => <Theme theme = {theme} key = {index} />);
  }

  render() {
    return <ThemeList themeList = {this._retrieveThemes()} />;
  }
}

ThemeListContainer.propTypes = {
  themeList: PropTypes.array.isRequired
};

export default ThemeListContainer;
