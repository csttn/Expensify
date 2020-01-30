import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Renderizando 0 se nao tiver expenses", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("Renderizando com uma expense", () => {
  const res = selectExpensesTotal([expenses[1]]);
  expect(res).toBe(1345);
});

test("renderizando com multiplas expenses", () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(1546);
});
