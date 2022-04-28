import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import "antd/dist/antd.css";

const root = ReactDom.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
