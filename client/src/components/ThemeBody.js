import React, { PropTypes } from "react";
import QuestionListContainer from "../containers/QuestionListContainer";

const ThemeBody = ({themeList}) => {
  return (
    <div className = "tab-content">
      {
        themeList.map((theme, index) => {

          let tabId = theme.name.replace(/ /g, "");
          let active = (index === 0 ? "tab-pane active" : "tab-pane");

          return (
            <div className = {active} key = {index} id = {tabId}>
              <QuestionListContainer questionList = {theme.questions} />
            </div>
          );
        })
      }
    </div>
  );
};

ThemeBody.propTypes = {
  themeList: PropTypes.array.isRequired
};

export default ThemeBody;
