import React from 'react';

import style from './App.less';

export default class App extends React.Component {
    render () {
        return (
            <div className="react-start">
                Hello React rudex
                <p className={style.build}>这是Redux页面!</p>
            </div>
        )
    }
}