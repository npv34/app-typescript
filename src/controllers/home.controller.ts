import WeatherService from "@services/weather.service";
import { Request, Response } from "express";
class HomeController {
    static async  index(req: Request, res: Response): Promise<any> {
        const dataAPI = await WeatherService.getCurrentWeather("Hanoi");
        const data = dataAPI.data;
        const temp = Math.floor(data.main.temp - 273);
        const humidity = data.main.humidity;
        const  windSpeed = data.wind.speed;
        res.render('home', {temp: temp, humidity: humidity, windSpeed: windSpeed});
    }
}

export default HomeController;