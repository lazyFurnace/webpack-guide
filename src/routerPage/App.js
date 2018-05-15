import React from 'react';

import style from './App.less';

export default class App extends React.Component {
    render () {
        return (
            <div className="react-start">
                Hello React Router
                <p className={style.build}>这是Router页面!</p>
            </div>
        )
    }
}