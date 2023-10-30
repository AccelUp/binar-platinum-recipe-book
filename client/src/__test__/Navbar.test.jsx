import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../components/navbar/Navbar";

describe("Navbar Component", () => {
  it("should render the Navbar component correctly", () => {
    const component = renderer.create(<Navbar />);
    const tree = component.toJSON();

    // Assert that the rendered component matches the snapshot
    expect(tree).toMatchSnapshot();
  });
});
