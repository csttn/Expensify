import {
  startAddExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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

test("Adicionando expense na base de dados e na Store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 2332,
    note: "this one is better",
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    database
      .ref(`expenses/${actions[0].expense.id}`)
      .once("value")
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });
});

test("Adicionando expense com  valor padrao na base de dados e na Store", () => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };

  store.dispatch(startAddExpense(expenseDefaults)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    database
      .ref(`expenses/${actions[0].expense.id}`)
      .once("value")
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
  });
});

//  Resposabilidade do firebase

// test("Erro na action Add expense", () => {
//   const action = startAddExpense(expenses[2]);

//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: expenses[2]
//   });
// });

// test("Expense vazia", () => {
//   const actionEmpty = startAddExpense();

//   expect(actionEmpty).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });
