import React from 'react';
import style from './DropdownMenuItem.module.css';
import {Link} from "react-router-dom";

class DropdownMenuItem extends React.Component {
    clicked = () => {
        this.props.clicked(this.props.id);
    }

    render() {
        return (
            <Link to={`${window.location.pathname}/../${this.props.link}`}>
                <div className={`${style.dropdownMenuWrapper}`}>
                    <div className={`${style.dropdownMenuItem}`} onClick={this.clicked}>
                        <div className={`${style.active__Object} ${style.active__ObjectName}`} >
                            {this.props.name} <span className={`${style.active__Object} ${style.active__ObjectArrow}`}>{this.props.quotes}</span>
                        </div>
                        <div className={`${style.active__Object} ${style.active__ObjectAddress}`}>
                            {this.props.address}
                        </div>
                        <div className={`${style.active__Object} ${style.active__ObjectDelivery}`}>
                            планируемая сдача: {this.props.objectDelivery}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default DropdownMenuItem;