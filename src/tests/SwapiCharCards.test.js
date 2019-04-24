import SwapiCharCards from "../containers/SwapiCharCards";
const swapiCharCards = new SwapiCharCards();

it("gets swapi characters data", done => {
  expect.assertions(2);
  swapiCharCards.getData().then(res => {
    expect(res).toEqual([...res]);
    expect(res).toHaveLength(2);
    done();
  });
});
