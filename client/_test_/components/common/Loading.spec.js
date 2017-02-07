/* eslint-env mocha */

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Loading from "../../../src/components/common/Loading";

describe("<Loading />", () => {
  it("should show a loading message", () => {
    const wrapper =  shallow(<Loading />);
    const actual = wrapper.find("h4").text();
    const expected = "Loading...";

    expect(actual).to.be.equal(expected);
  });

  it("should show a loading icon", () => {
    const wrapper =  shallow(<Loading />);
    const actual = wrapper.find("i").prop("className");
    const expected = "fa fa-refresh fa-spin";

    expect(actual).to.be.equal(expected);
  });
});
