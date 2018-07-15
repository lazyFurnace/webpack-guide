import React from 'react';
import ReactDom from 'react-dom';

import './common/js/common.js';

if (module.hot) {
    module.hot.accept();
}

function App() {
    return (
        <div>这是首页热加载模块</div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));