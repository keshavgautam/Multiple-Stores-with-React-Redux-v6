import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import bookStore from "./bookStore";
// specifying two contexts also works
// commenting out because i'm for using the default context
// import bookContext from "./bookContext";
import themeStore from "./themeStore";
import ThemeContext from "./themeContext";
import Theme from "./Theme";
import Books from "./Books";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider context={ThemeContext} store={themeStore}>
    <Provider /** context={bookContext} */ store={bookStore}>
      <Theme context={ThemeContext}>
        <Books /** context={bookContext} */ />
      </Theme>
    </Provider>
  </Provider>,
  rootElement
);
