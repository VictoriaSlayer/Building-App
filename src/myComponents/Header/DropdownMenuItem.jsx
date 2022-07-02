import React from 'react';
import style from './DropdownMenuItem.module.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Li(props){
    return (
        <div>
            {props.txt}
        </div>
    )
}
class DropdownMenuItem extends React.Component {

    constructor(props){
        super(props);
    }

    clicked = () => {
        this.props.clicked(this.props.id);
    }

    render() {
        return (
            <BrowserRouter>
                <div className={`${style.DropdownMenuItem}`} onClick={this.clicked}>
                    <Link to="/arhitector/object">Нажмиии</Link>
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

                <Routes>
                    <Route path="/arhitector" element={<Li txt="нажми меня"/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default DropdownMenuItem;