import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Renderizando ExpensesSummary corretamente com 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expenseTotal={235} />
  );

  expect(wrapper).toMatchSnapshot();
});

test("Renderizando ExpensesSummary corretamente com todos expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={27} expenseTotal={235664543} />
  );

  expect(wrapper).toMatchSnapshot();
});
