import React from "react";
import Avatar from "../components/Avatar";
import { Image } from "../components/styledComponents";
import { shallow } from "enzyme";
it("expects to render SwapiCharCard component", () => {
  expect(shallow(<Avatar />)).toMatchSnapshot();
  expect(
    shallow(<Avatar name={"C-3PO"} />).contains(
      <Image src="./img/c3po.jpg" alt="c-3po" />
    )
  ).toEqual(true);
  expect(
    shallow(<Avatar name={"Luke Skywalker"} />).contains(
      <Image src="./img/luke.jpg" alt="Luke Skywalkwer" />
    )
  ).toEqual(true);
});
