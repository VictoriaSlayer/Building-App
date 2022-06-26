import React from 'react';
import style from './DropdownMenuItem.module.css';

// function DropdownMenuItem(props){

//     return (
//         <div className={style.DropdownMenuItem}>
//             <div className={`${style.active__Object} ${style.active__ObjectName}`} >
//                 {props.name} <span className={`${style.active__Objec} ${style.active__ObjectArrow}`}>{`>`}</span>
//             </div>
//             <div className={`${style.active__Object} ${style.active__ObjectAddress}`}>
//                 {props.address}
//             </div>
//             <div className={`${style.active__Object} ${style.active__ObjectDelivery}`}>
//                 планируемая сдача: {props.objectDelivery}
//             </div>
//         </div>
//     )
// }

class DropdownMenuItem extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    componentDidMount() {
        let elem = document.querySelector(`.${style.DropdownMenuItem}`);
        console.log(elem);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={style.DropdownMenuItem}>
                <div className={`${style.active__Object} ${style.active__ObjectName}`} >
                    {this.props.name} <span className={`${style.active__Objec} ${style.active__ObjectArrow}`}>{`>`}</span>
                </div>
                <div className={`${style.active__Object} ${style.active__ObjectAddress}`}>
                    {this.props.address}
                </div>
                <div className={`${style.active__Object} ${style.active__ObjectDelivery}`}>
                    планируемая сдача: {this.props.objectDelivery}
                </div>
            </div>
        )
    }
}

export default DropdownMenuItem;