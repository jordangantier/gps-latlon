function gpslatlon(lat1, lon1, lat2, lon2, units = 'km') {
    let s;

    switch (units) {
        case ('ft'):
            s = 3280.8399;
            break;
        case ('yd'):
            s = 1093.6133;
            break;
        case ('ml'):
            s = 0.6214;
            break;
        case ('nm'):
            s = 0.5399;
            break;
        case ('nl'):
            s = 0.1799;
            break;
        case ('m'):
            s = 1000;
            break;
        case ('km'):
            s = 1;
            break;
    }

    let p = 0.017453292519943295;
    let a = 0.5 - Math.cos((lat2 - lat1) * p) / 2 +
        Math.cos(lat1 * p) * Math.cos(lat2 * p) *
        (1 - Math.cos((lon2 - lon1) * p)) / 2;
    r = Math.round(12742 * s * Math.asin(Math.sqrt(a)) * 1000) / 1000;

    return r;
}

module.exports = gpslatlon;
