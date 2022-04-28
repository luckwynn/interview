import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import "antd/dist/antd.css";
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import model  from './model/index'

const app = dva({
  history: createHistory(),
})
app.model(model)

// app.router()

app.start('#root');

const root = ReactDom.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
