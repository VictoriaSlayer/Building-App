import React from 'react';
import style from './myComponent.module.css';

function Menu(){
    return(
        <div>LALALA</div>
    )
}

export default class MyComponent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name:"Alex",
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            name: "Ololoshka",
        }
        )
    }

    render(){
        return(
            <div>
                <div>{this.state.name}</div>
                <Menu/>
                <button onClick={this.handleClick}>12345</button>
            </div>
        )
    }
}