import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Erro na action Remove Expense", () => {
  const action = removeExpense({ id: "1234" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "1234"
  });
});

test("Erro na action Edition Expense", () => {
  const action = editExpense("1234", { note: "text update" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "1234",
    updates: { note: "text update" }
  });
});

test("Erro na action Add expense", () => {
  const expenseData = {
    description: "test",
    note: "note of test",
    amount: 3,
    createdAt: 1000
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });

  const actionEmpty = addExpense();

  expect(actionEmpty).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
