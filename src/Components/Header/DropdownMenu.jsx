import React from 'react';
import style from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            chosenId: 0,
        };
    }

    clickedItem = (id) => {
        if (this.state.opened === true) {
            this.setState(state => ({
                chosenId: id,
            }));
        }
        this.setState(state => ({
            opened: !state.opened
        }));
    }

    render() {
        // преобразовываем данные с пропсов в массив и маппим их после
        const items = this.props.data;
        const dropdownObjects = [];

        dropdownObjects.push(items[this.state.chosenId]);
        if (this.state.opened) {
            for (let i in items) {
                dropdownObjects.push(items[i]);
            }
        }

        return (
            <div className={style.DropdownMenu}>
                {dropdownObjects.map((item, index) => (
                    <DropdownMenuItem
                        name={item.name}
                        address={item.address}
                        objectDelivery={item.objectDelivery}
                        key={item}
                        clicked={this.clickedItem}
                        id={item.id}
                        link={item.link}
                        quotes={index === 0 ? ">" : ""}
                    />
                ))}
            </div>
        )
    }
}


export default DropdownMenu;