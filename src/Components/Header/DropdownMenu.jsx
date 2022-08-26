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
        this.setState(state => ({
            chosenId: id,
            opened: !state.opened
        }));
    }

    render() {
        const rawItems = this.props.data;
        const processedItems = [rawItems[this.state.chosenId]];
        if (this.state.opened) {
            processedItems.push(...rawItems);
        }

        return (
            <div className={style.DropdownMenu}>
                {processedItems.map((item, index) => (
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