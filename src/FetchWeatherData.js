import WeatherApiInfo from "./WeatherApiInfo";
import DefaultData from "./DefaultData";
import FetchIp from "./FetchIp";
import IpDataInfo from "./IpDataApiInfo";

const FetchWeatherData = async (location, setLocationData) => {
    if (location == "") {
        try {
            let ipRequest = new Request(IpDataInfo.requestURL);
            const response = await fetch(ipRequest).then((response) =>
                response.json()
            );
            console.log(response);
            location = `${response.city}, ${response.region_code}`;
        } catch (error) {
            console.log(
                "Failed to fetch current location from ip address",
                error
            );
            location = DefaultData.location.name;
        }
    }

    console.log("fetching new data");
    const api_key = WeatherApiInfo.key;
    const baseRequestURL = WeatherApiInfo.baseRequestURL;
    const forecastEndpoint = WeatherApiInfo.forecastEndpoint;
    if (typeof location == "undefined" || location == null) {
        location = "auto:ip";
    }
    const dayCount = 1;

    let forecastRequest = new Request(
        `${baseRequestURL}${forecastEndpoint}?key=${api_key}&q=${location}&days=${dayCount}`
    );

    try {
        const response = await fetch(forecastRequest);
        if (!response.ok) {
            console.log("request failed");
            return;
        }
        let data = await response.json();
        console.log(data);
        setLocationData(data);
        return;
    } catch (err) {
        console.log("error occurred");
    }
};

export default FetchWeatherData;
