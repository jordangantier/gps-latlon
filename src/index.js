function gpslatlon(lat1, lon1, lat2, lon2, units) {
    let s = 1;
    if (units == null) {
        units = 'km';
    }
    if (units == 'ft') {
        s = 3280.8399;
    } else if (units == 'yd') {
        s = 1093.6133;
    } else if (units == 'ml') {
        s = 0.6214;
    } else if (units == 'nm') {
        s = 0.5399;
    } else if (units == 'nl') {
        s = 0.1799;
    } else if (units == 'm') {
        s = 1000;
    } else if (units == 'km') {
        s = 1;
    } else {
        s = 1;
    }

    let p = 0.017453292519943295;
    let a = 0.5 - Math.cos((lat2 - lat1) * p) / 2 +
        Math.cos(lat1 * p) * Math.cos(lat2 * p) *
        (1 - Math.cos((lon2 - lon1) * p)) / 2;
    r = Math.round(12742 * s * Math.asin(Math.sqrt(a)) * 1000) / 1000;

    return r;
}

module.exports = gpslatlon;
