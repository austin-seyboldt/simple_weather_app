import WeatherApiInfo from "./WeatherApiInfo";
import DefaultData from "./DefaultData";
import IpDataInfo from "./IpDataApiInfo";

const FetchWeatherData = async (location, setLocationData, setIsLoading) => {
    if (location === "") {
        try {
            let ipRequest = new Request(IpDataInfo.requestURL);
            const response = await fetch(ipRequest).then((response) =>
                response.json()
            );
            location = `${response.city} ${response.region} ${response.country_name}`;
        } catch (error) {
            console.log(
                "Failed to fetch current location from ip address",
                error
            );
            location = DefaultData.location.name;
            console.log(location);
        }
    }

    console.log("fetching new data");
    const api_key = WeatherApiInfo.key;
    const baseRequestURL = WeatherApiInfo.baseRequestURL;
    const forecastEndpoint = WeatherApiInfo.forecastEndpoint;
    const dayCount = 5;

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
        setLocationData(data);
        setIsLoading(false);
        console.log("request success");
        return;
    } catch (err) {
        console.log("error occurred");
    }
};

export default FetchWeatherData;
