import React from "react";
import { shallow } from "enzyme";
import NotFoounfPage from "../../components/NotFoundPage";

test("Renderizando NotFoundPage", () => {
  const wrapper = shallow(<NotFoounfPage />);
  expect(wrapper).toMatchSnapshot();
});
