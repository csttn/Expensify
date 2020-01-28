import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("Renderizando ExpenseForm Vazio", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("Renderizando ExpenseForm completo", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("Renderizando ExpenseForm inválido", () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("Renderizando descrição na alteração de entrada", () => {
  const value = "Nova descrição";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Renderizando notas na textarea", () => {
  const value = "Nova Nota";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("note")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Renderizando valor Amount inválido", () => {
  const value = "Invalido";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe("");
});

test("Renderizando valor Amount válido", () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe(value);
});

test("Deve solicitar o envio de prop para enviar um formulario válido", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

// Propriedade (prop) não acha resultados

// test("Definir nova data na alteração", () => {
//   const now = moment();
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find("SingleDatePicker").prop("onDateChange")(now);
//   expect(wrapper.state("createdAt")).toEqual(now);
// });

// test("should set calendar focus on change", () => {
//   const focused = true;
//   const wrapper = shallow(<ExpenseForm />);
//   wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
//   expect(wrapper.state("calendarFocused")).toBe(focused);
// });
