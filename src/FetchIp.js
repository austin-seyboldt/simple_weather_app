import IpDataInfo from "./IpDataApiInfo";

const FetchIp = async () => {
    try {
        let ipRequest = new Request(IpDataInfo.requestURL);
        const response = await fetch(ipRequest).then((response) =>
            response.json()
        );
        return response;
    } catch (error) {
        console.log("Failed to fetch current location from ip address", error);
    }
};

export default FetchIp;
