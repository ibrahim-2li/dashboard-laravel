<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class WeatherController extends Controller
{
    public function getWeather()
    {
        $apiKey = config('services.openweathermap.key');
        $city = 'Riyadh';
        $countryCode = 'Saudi Arabia';
        $units = 'metric';

        // Cache weather data for 10 minutes
        $weatherData = Cache::remember('weather_data', 600, function () use ($apiKey, $city, $countryCode, $units) {
            $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
                'q' => "{$city},{$countryCode}",
                'units' => $units,
                'appid' => $apiKey,
            ]);

            if ($response->successful()) {
                $data = $response->json();
                return [
                    'city' => $data['name'],
                    'country' => $data['sys']['country'],
                    'temp' => round($data['main']['temp']),
                ];
            }

            return null;
        });

        return response()->json($weatherData);
    }
}
