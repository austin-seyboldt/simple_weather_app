import React, { useEffect, useState } from "react";
import "../css/Menu.css";
import MenuDropDownBox from "./MenuDropDownBox";
import TestData from "../TestData";
import WeatherApiInfo from "../WeatherApiInfo";

const MenuSearchBar = ({ updateLocation }) => {
    const [newLocation, setNewLocation] = useState("");
    const [locationHints, setLocationHints] = useState([]);

    const handleSubmit = () => {
        const searchBox = document.getElementById("menu__search__box");
        setNewLocation(searchBox.value);
        searchBox.value = "";

        return false;
    };

    useEffect(() => {
        updateLocation(newLocation);
        console.log("in use effect", newLocation);
    }, [newLocation]);

    const handleHintClick = (location) => {
        setNewLocation(`${location.name},${location.region}`);
        setLocationHints([]);
        document.getElementById("menu__search__box").value = "";
    };

    const getLocationHints = async (location) => {
        console.log("sending autocomplete request...");
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
                <ul className="search__drop__down--wrapper">
                    <input
                        type="text"
                        name="search__input"
                        id="menu__search__box"
                        placeholder="Search for a new location..."
                        autoComplete="off"
                        onKeyPress={(e) =>
                            e.key == "Enter" ? handleSubmit() : null
                        }
                        onChange={() => handleSearchChange()}
                    />
                    {locationHints.map((hint) => {
                        return (
                            <MenuDropDownBox
                                key={``}
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
