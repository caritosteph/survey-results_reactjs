/* eslint-env mocha */

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Average from "../../../src/components/common/Average";

describe("<Average />", () => {
  it("should give a value a \"average\" class when average exist", () => {
    const average = "5";
    const wrapper =  shallow(<Average average = {average} />);
    const actual = wrapper.find("p").text();
    const expected = "5";

    expect(actual).to.be.equal(expected);
  });
});
