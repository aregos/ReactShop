import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory()

ReactDOM.render(
    <Router history = {history}>
    <App />
    </Router>,
    document.getElementById("root"));
