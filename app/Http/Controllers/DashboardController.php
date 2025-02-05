<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{

    public function index()
    {


        return view('dashboard');
    }

    // public function index()
    // {
    //     $response = Http::get(route('weather.get'));

    //     $weatherData = $response->successful() ? $response->json() : null;

    //     return view('dashboard', compact('weatherData'));
    // }
}
