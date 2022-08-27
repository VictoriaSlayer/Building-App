import React from 'react';
import styles from './Money.module.css';

class Management extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        }
    }

    render(){

        return(

            <>
                <div>{this.props.allSum}</div>
            </>
        )
    }
}

export default Management;