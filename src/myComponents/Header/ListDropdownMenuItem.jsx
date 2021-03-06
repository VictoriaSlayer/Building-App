import React from 'react';
import style from './DropdownMenuItem.module.css';
class ListDropdownMenuItem extends React.Component {

    constructor(props){
        super(props);
    }

    clicked = () => {
        this.props.clicked(this.props.id);
    }

    render() {
        return (
            <div>

                <div className={`${style.dropdownMenuWrapper}`}>
                    <div className={`${style.dropdownMenuItem}`} onClick={this.clicked}>
                        <div className={`${style.active__Object} ${style.active__ObjectName}`} >
                            {this.props.name} <span className={`${style.active__Objec} ${style.active__ObjectArrow}`}>{this.props.quotes}</span>
                        </div>
                        <div className={`${style.active__Object} ${style.active__ObjectAddress}`}>
                            {this.props.address}
                        </div>
                        <div className={`${style.active__Object} ${style.active__ObjectDelivery}`}>
                            планируемая сдача: {this.props.objectDelivery}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListDropdownMenuItem;