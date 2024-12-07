import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el, { onNavigate, nextPathname }) => {
  ReactDOM.render(
    <App onNavigate={onNavigate} nextPathname={nextPathname} />,
    el
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, {
      defaultRouter: true,
    });
  }
}

export { mount };
