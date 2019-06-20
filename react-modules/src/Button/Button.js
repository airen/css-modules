import React from 'react';
import styles from './Button.module.css';

console.log(styles);

class Button extends React.Component {
    render() {
        return (
            <div className={styles.button} role="button">Button</div>
        )
    }
}

export default Button;