import axios from 'axios';
class WeatherService {
    static async getCurrentWeather(cityName: string) : Promise<any>{
        // call api
        const urlAPI = "https://api.openweathermap.org/data/2.5/weather";
        const data = await axios.get(urlAPI, {
            params: {
                q: cityName,
                appid: "c401a010b6f63142bf1e3b514d1d559e"
            }
        });
        return data;
    }
}

export default WeatherService;