import React from "react";
import { findByTestAttr, checkProps } from "./../../../Utils";
import ListItem from "./index";
import { shallow } from "enzyme";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some Text"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some Text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Should render without Error", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Should not Render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some Text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
