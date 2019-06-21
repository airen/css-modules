import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.module.css'

const Button = () => {
    return (
        <div className="button" styleName="button-primary" role="button">Primary Butotn</div>
    )
}

export default CSSModules(Button, styles, {allowMultiple: true, handleNotFoundStyleName: 'throw'})