import React from "react";
import Hero from "../components/hero/Hero";
import renderer from "react-test-renderer";

describe("Hero Component", () => {
  it("should render the Hero component correctly", () => {
    const component = renderer.create(<Hero />);
    const tree = component.toJSON();

    // Assert that the rendered component matches the snapshot
    expect(tree).toMatchSnapshot();
  });
});
