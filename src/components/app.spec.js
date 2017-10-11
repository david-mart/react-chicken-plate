import React from 'react';
import App from "./app";
import { Switch } from "react-router-dom";
import { shallow } from "enzyme";

describe("<App />", () => {
  it("should have Switch component with all the routes", () => {
    const expected = 1;
    const actual = shallow(<App />).find(Switch).length;
    expect(actual).toEqual(expected);
  });
});
