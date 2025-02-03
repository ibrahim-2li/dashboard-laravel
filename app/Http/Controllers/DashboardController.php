<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\WeatherService;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        $weather = WeatherService::getWeather('Riyadh', 'SA');

        if (isset($weather['error'])) {
            return view('dashboard.index', ['weatherError' => $weather['error']]);
        }

        return view('dashboard.index', compact('weather'));
    }
}
