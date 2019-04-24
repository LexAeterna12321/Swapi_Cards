import React from "react";
import SwapiCharCard from "../components/SwapiCharCard";
import Avatar from "../components/Avatar";
import Description from "../components/Description";
import { shallow } from "enzyme";

it("expects to render SwapiCharCard component", () => {
  expect(shallow(<SwapiCharCard />).length).toEqual(1);
  expect(shallow(<SwapiCharCard />)).toMatchSnapshot();
});

it("renders children when passed in", () => {
  const wrapper = shallow(
    <SwapiCharCard>
      <div className="cards__card">
        <Avatar />
        <Description />
      </div>
    </SwapiCharCard>
  );
  expect(wrapper.contains(<Avatar />)).toEqual(true);
  expect(wrapper.contains(<Description />)).toEqual(true);
});
