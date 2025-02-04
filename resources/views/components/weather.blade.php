    {{--
        @props(['weatherData'])
    @if (isset($weatherData))
        <p><strong>Temp </strong> {{ $weatherData['main']['temp'] }}°C</p>
    @else
        <p>Unable to fetch weather data.</p>
    @endif --}}
{{--
    @if (isset($weatherData) && isset($weatherData['main']['temp']))
        <h2 class="mb-0 font-weight-normal">
            <i class="icon-{{ strtolower($weatherData['weather'][0]['main']) }} mr-2"></i>
            {{ round($weatherData['main']['temp']) }}<sup>°C</sup>
        </h2>
    @else
        <h2 class="mb-0 font-weight-normal text-danger">Unable to fetch weather data.</h2>
    @endif --}}
    {{-- @props(['weatherData']) --}}
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            fetch("{{ route('weather.get') }}")  // ✅ Make sure this works
                .then(response => response.json())
                .then(data => {
                    if (data && data.temp) {
                        document.getElementById("weather-widget").innerHTML = `
                            <h2 class="mt-3 font-weight-normal">${data.temp}°C</h2>
                            <h4 class="location font-weight-normal">${data.city}</h4>
                            <h6 class="font-weight-normal">${data.country}</h6>
                        `;
                    } else {
                        document.getElementById("weather-widget").innerHTML = `<h2 class="text-danger">Unable to fetch weather data.</h2>`;
                    }
                })
                .catch(error => {
                    document.getElementById("weather-widget").innerHTML = `<h2 class="text-danger">Error fetching weather.</h2>`;
                });
        });
        </script>
