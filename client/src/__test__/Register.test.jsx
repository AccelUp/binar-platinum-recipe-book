import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store"; // Import your Redux store configuration
import renderer from "react-test-renderer";
import Register from "../pages/auth/register/Register";
import { applyMiddleware, createStore } from "redux"; // Import createStore from Redux
import thunk from "redux-thunk";
import rootReducer from "../reducers";

describe("Register Component", () => {
  it("should render the Register component correctly", () => {
    const reduxStore = createStore(rootReducer, applyMiddleware(thunk));

    const component = renderer.create(
      <Provider store={reduxStore}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
