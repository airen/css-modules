import React from 'react';
import styles from './Button1.module.css';

console.log(styles);

class Button1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {type} = this.props;
        console.log(this.type)
        return (
            <div className={styles.button} data-type={`${type}`} role="button" >Button</div>
        )
    }
}

export default Button1;