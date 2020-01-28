import expensesReducer from "../../reducers/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("Configurar Obj vazio", () => {
  const state = expensesReducer(undefined, { type: "jnbdskjf" });

  expect(state).toEqual([]);
});

test("Configurar ADD Expense", () => {
  const obj = {
    type: "ADD_EXPENSE",
    expense: {
      id: 4,
      description: "guga",
      note: "",
      amount: 1,
      createdAt: moment(500)
        .add(2, "days")
        .valueOf()
    }
  };

  const state = expensesReducer(expenses, obj);

  expect(state).toEqual([...expenses, obj.expense]);
});

test("Configurar REMOVE EXPENSE", () => {
  const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: 3 });

  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("Configurar EDIT EXPENSE", () => {
  const description = "Carla";
  const obj = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, obj);
  expect(state[1].description).toBe(description);
});

test("Configurando uma edição sem alteração", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
