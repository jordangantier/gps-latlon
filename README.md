# GPS-LATLON

**gps-latlon** is a small npm module that calculates the distance between two latitude and longitude coordinates in kilometers, meters, miles, yards, feet and nautical miles, from decimal degrees (GPS coordinates) using the Harvesine formula.

Simply use the script using it as follows:

Install:

    npm install gps-latlon

import module in your file with:

    const latlon = require('gps_latlon');

Form of use:

    latlonDist(lat1, lon1, lat2, lon2, 'conversion_unit')

Conversion unit can be:

- Feet: 'ft'
- Yards: 'yd'
- Miles: 'ml'
- Meters: 'm'
- Kilometers: 'km'
- Nautical Miles: 'nml'

If no conversion unit is used, kilometers will be assumed as the default unit.

Use example:

    latlon(-17.64582, -63.336103, -17.644973, -63.141274, "ml")

Returns: **12.828**

Enjoy!
