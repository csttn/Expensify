import moment from "moment";
import filterReducer from "../../reducers/filters";

test("Configurar valores de filtro padrão", () => {
  const state = filterReducer(undefined, { type: "@#&&&*#" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Configurar valor de classificação por data", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };

  const state = filterReducer(currentState, { type: "SORT_BY_DATE" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Configurar valor de classificação por quantidade", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };

  const state = filterReducer(currentState, { type: "SORT_BY_AMOUNT" });

  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Configurar valor de filtro por texto", () => {
  const currentState = {
    text: "AAA",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };

  const state = filterReducer(currentState, {
    type: "SET_TEXT_FILTER",
    text: "TEXTO DE TESTE"
  });

  expect(state).toEqual({
    text: "TEXTO DE TESTE",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Configurar valor de filtro por StartDate", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: 0,
    endDate: moment().endOf("month")
  };

  const state = filterReducer(currentState, {
    type: "SET_START_DATE",
    startDate: 1000
  });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: 1000,
    endDate: moment().endOf("month")
  });
});

test("Configurar valor de filtro por EndDate", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: 1
  };

  const state = filterReducer(currentState, {
    type: "SET_END_DATE",
    endDate: 1000
  });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: 1000
  });
});
