import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import Login from "../pages/auth/login/Login";
import renderer from "react-test-renderer";

describe("Login Component", () => {
  it("should render the Login component correctly", () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
