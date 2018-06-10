import React from 'react';
import RotationMap from 'react-rotation-map';

import style from './App.less';

export default class App extends React.Component {
    render () {
        return (
            <div className={style.father}>
                <RotationMap>
                    {
                        [
                            <div className={style.test}>111</div>,
                            <div className={style.test}>222</div>,
                            <div className={style.test}>333</div>,
                            <div className={style.test}>444</div>
                        ]
                    }
                </RotationMap>
            </div>
        )
    }
}