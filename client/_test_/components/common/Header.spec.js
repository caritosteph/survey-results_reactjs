/* eslint-env mocha */

import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Header from "../../../src/components/common/Header";

describe("<Header />", () => {
  it("should link to initial root path", () => {
    const wrapper =  shallow(<Header />);
    const actual = wrapper.findWhere( n => n.prop("to") === "/").length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

});
