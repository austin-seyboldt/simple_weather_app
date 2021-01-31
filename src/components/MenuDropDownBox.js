import React from "react";

const MenuDropDownBox = ({ location, handleClick }) => {
    const { name } = location;
    return (
        <li
            className="menu__drop__down__box"
            onClick={() => handleClick(location)}
        >
            <div className="menu__drop__down__box--container">
                <h5 className="menu__drop__down__box--location__name">
                    {name}
                </h5>
            </div>
        </li>
    );
};

export default MenuDropDownBox;
