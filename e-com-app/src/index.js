import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/Jost/static/Jost-Regular.ttf";
import "./fonts/Jost/static/Jost-Light.ttf";
import "./fonts/Lato/Lato-Light.ttf";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
