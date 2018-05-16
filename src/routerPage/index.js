import React from "react";
import ReactDom from "react-dom";

import '../common/css/index.less';
import '../common/js/common.js';

import App from './App.js';

ReactDom.render(
    <App/>,
    document.getElementById("root")
);