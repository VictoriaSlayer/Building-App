import React from 'react';
import styles from './Money.module.css';

class Money extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        }
        console.log(this.props);
    }

    render(){

        return(

            <>
                <div>{this.props.allSum}</div>
            </>
        )
    }
}

export default Money;