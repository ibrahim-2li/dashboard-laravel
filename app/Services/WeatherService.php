<?php
namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WeatherService
{
    public static function getWeather($city = 'Riyadh', $country = 'SA')
    {
        $apiKey = env('WEATHER_API_KEY');

        if (!$apiKey) {
            return ['error' => 'API key is missing. Set WEATHER_API_KEY in .env'];
        }

        $url = "https://api.openweathermap.org/data/2.5/weather?q={$city},{$country}&units=metric&appid={$apiKey}";

        $response = Http::get($url);

        if ($response->successful()) {
            return $response->json();
        }

        return null;
    }
}
