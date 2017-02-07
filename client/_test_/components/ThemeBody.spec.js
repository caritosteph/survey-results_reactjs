/* eslint-env mocha */

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import ThemeBody from "../../src/components/ThemeBody";
import QuestionListContainer from "../../src/containers/QuestionListContainer";

const themeList = [{
    name: "The Work",
    questions: []
  },{
    name: "The Place",
    questions: []
  }];

const setup = () => {
  return  shallow(<ThemeBody themeList = {themeList} />);
}

describe("<ThemeBody />", () => {
  it("should show the same number of <QuestionListContainer /> components than themeList variable send", () => {

    const wrapper = setup();
    const actual = wrapper.find(QuestionListContainer).length;
    const expected = themeList.length;

    expect(actual).to.be.equal(expected);
  });
});
