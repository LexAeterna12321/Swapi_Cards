import React from "react";
import SwapiCharCards from "../containers/SwapiCharCards";
import { shallow } from "enzyme";
const swapiCharCards = new SwapiCharCards();
describe("SwapiCharCard component render / Swapi API work check", () => {
  it("expects to render SwapiCharCard component", () => {
    expect(shallow(<SwapiCharCards />)).toMatchSnapshot();
  });

  it("gets swapi characters data", done => {
    expect.assertions(2);
    swapiCharCards.getData().then(res => {
      expect(res).toEqual([...res]);
      expect(res).toHaveLength(2);
      done();
    });
  });
});
