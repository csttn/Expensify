import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import toJSON from "enzyme-to-json";

test("Renderização do Header", () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();

  // expect(wrapper.find("h1").length).toBe(1);

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
