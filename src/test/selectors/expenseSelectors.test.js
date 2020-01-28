import selectedExpenses from "../../selectors/expenses";
import moment from "moment";

const expenses = [
  {
    id: "0",
    description: "Cleyton",
    note: "",
    amount: 195,
    createdAt: moment(1000)
      .add(4, "days")
      .valueOf()
  },
  {
    id: "1",
    description: "julia",
    note: "",
    amount: 1345,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "Antonia",
    note: "",
    amount: 5,
    createdAt: moment(500)
      .add(10, "days")
      .valueOf()
  }
];

test("Filtro de texto", () => {
  const filters = {
    text: "Cleyton"
  };
  const result = selectedExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test("Filtro de classificação por Data de inicio", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(100).add(9, "days".valueOf()),
    endDate: undefined
  };
  const result = selectedExpenses(expenses, filters);
  expect(result).toEqual([expenses[2]]);
});

test("Filtro de classificação por data de termino", () => {
  const filters = {
    text: "",
    sortBy: "date",
    endDate: moment(1),
    startDate: undefined
  };
  const result = selectedExpenses(expenses, filters);

  expect(result).toEqual([expenses[1]]);
});

test("Filtro de classificação por Data", () => {
  const filters = {
    text: "",
    sortBy: "date",
    endDate: undefined,
    startDate: undefined
  };
  const result = selectedExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Filtro de classificação por Quantidade", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    endDate: undefined,
    startDate: undefined
  };
  const result = selectedExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
