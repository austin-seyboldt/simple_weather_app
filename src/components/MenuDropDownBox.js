import React from "react";

const MenuDropDownBox = ({ location, handleClick }) => {
    const { name, region, country } = location;
    return (
        <li
            className="menu__drop__down__box"
            onClick={() => handleClick(location)}
        >
            <div className="menu__drop__down__box--container">
                <h5 className="menu__drop__down__box--location__name">
                    {name}
                </h5>
                <h6 className="menu__drop__down__box--location__country">
                    {country}
                </h6>
            </div>
        </li>
    );
};

export default MenuDropDownBox;
