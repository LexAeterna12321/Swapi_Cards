import React from "react";
import Description from "../components/Description";
import { shallow } from "enzyme";
it("expects to render SwapiCharCard component", () => {
  expect(shallow(<Description />)).toMatchSnapshot();
});
