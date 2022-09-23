import React from 'react'
import Icon from './icon'
import './buttom.css'

// import { FormattedMessage } from 'react-intl';

export const ButtomGet = () => {
    return (
        <button className="cssbuttons-io-button">Read more
            <div className="icon">
                <Icon/>
            </div>
        </button>
    )
}
