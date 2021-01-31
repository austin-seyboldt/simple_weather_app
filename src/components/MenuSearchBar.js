import React, { useContext, useEffect, useState } from "react";
import "../css/Menu.css";
import MenuDropDownBox from "./MenuDropDownBox";
import WeatherApiInfo from "../WeatherApiInfo";
import { GlobalContext } from "./GlobalContext";

const MenuSearchBar = () => {
    const { updateLocation } = useContext(GlobalContext);
    const [locationHints, setLocationHints] = useState([]);

    const handleSubmit = () => {
        const searchBox = document.getElementById("menu__search__box");
        updateLocation(searchBox.value);
        setLocationHints([]);
        searchBox.value = "";
        return false;
    };

    const handleHintClick = (location) => {
        setLocationHints([]);
        document.getElementById("menu__search__box").value = "";
        updateLocation(location.name);
    };

    const getLocationHints = async (location) => {
        let response;
        try {
            const requestURL = `${WeatherApiInfo.baseRequestURL}${WeatherApiInfo.autoCompleteEndpoint}?key=${WeatherApiInfo.key}&q=${location}`;
            const hintRequest = new Request(requestURL);
            response = await fetch(hintRequest);
            if (!response.ok) {
                return;
            }
            response = await response.json();
        } catch (error) {
            console.log("error occurred fetching autocomplete data", error);
            return;
        }
        setLocationHints(response);
    };

    const handleSearchChange = () => {
        const searchBox = document.getElementById("menu__search__box");
        if (searchBox.value.length < 3) {
            setLocationHints([]);
        }
        getLocationHints(searchBox.value);
    };

    return (
        <div className="menu__search__bar">
            <div className="menu__search__bar--container">
                <input
                    type="text"
                    name="search__input"
                    id="menu__search__box"
                    placeholder="Search for a new location..."
                    autoComplete="off"
                    onKeyPress={(e) =>
                        e.key === "Enter" ? handleSubmit() : null
                    }
                    onChange={() => handleSearchChange()}
                />
                <ul className="search__drop__down--wrapper">
                    {locationHints.map((hint) => {
                        return (
                            <MenuDropDownBox
                                key={hint.id}
                                location={hint}
                                handleClick={handleHintClick}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MenuSearchBar;
