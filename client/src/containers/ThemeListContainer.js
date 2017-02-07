import React, { Component, PropTypes } from "react";
import ThemeList from "../components/ThemeList";
import ThemeHeader from "../components/ThemeHeader";
import ThemeBody from "../components/ThemeBody";

class ThemeListContainer extends Component {

  constructor (props) {
    super(props);
    this._retrieveThemes = this._retrieveThemes.bind(this);
  }

  _retrieveThemes () {
    let {themeList} = this.props;
    return (
      <div className = "nav-tabs-custom">
        <ThemeHeader themeList = {themeList}/>
        <ThemeBody themeList = {themeList}/>
      </div>
    );
  }

  render() {
    return (
      <ThemeList themeList = {this._retrieveThemes()} />
    );
  }
}

ThemeListContainer.propTypes = {
  themeList: PropTypes.array.isRequired
};

export default ThemeListContainer;
