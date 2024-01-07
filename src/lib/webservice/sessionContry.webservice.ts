
const apiURL ="http://ip-api.com/json"

export async function getSessionCountryCode() {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.countryCode
}