import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../actions/filters";

import moment from "moment";

test("Erro na action setStartDate", () => {
  const startDate = setStartDate(moment(0));

  expect(startDate).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Erro na action setEndDate", () => {
  const endDate = setEndDate(moment(0));
  expect(endDate).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("Erro na action text filter", () => {
  const text = "Text";
  const textFilter = setTextFilter(text);

  expect(textFilter).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });

  const textFilterEmpty = setTextFilter();
  expect(textFilterEmpty).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("Erro na action sortByDate", () => {
  const sortDate = sortByDate();
  expect(sortDate).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("Erro na action sortByAmount", () => {
  const sortAmount = sortByAmount();
  expect(sortAmount).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
