import React from 'react';

import style from './App.less';

export default class App extends React.Component {
    render () {
        return (
            <div className="react-start">
                Hello React
                <p className={style.build}>react build finish</p>
            </div>
        )
    }
}