import NavigationBar from "../components/NavigationBar";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
        <NavigationBar />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
