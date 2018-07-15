import React from "react";
import ReactDom from "react-dom";

import '../common/js/common.js';

import App from './App.js';

//开启热加载
if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    <App/>,
    document.getElementById("root")
);