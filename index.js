function celsius2Fahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = (celsius * 9 / 5) + 32;
    return converted;
}

function fahrenheit2Celsius(fahrenheit) {
	if (typeof fahrenheit !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = (fahrenheit - 32) * 5/9; 
    return converted;
}

function km2m(km) {
    if (typeof km !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = km * 1000;
    return converted;
}

function m2km(m) {
    if (typeof m !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = m/1000;
    return converted;
}

function ms2kmh(ms) {
    if (typeof ms !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = ms * 3.6;
    return converted;
}

function kmh2ms(kmh) {
    if (typeof kmh !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = ms / 3.6;
    return converted;
}

function mm2m(mm) {
    if (typeof mm !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = mm / 1000;
    return converted;
}

function m2mm(m) {
    if (typeof m !== 'number') {
        throw new InputException('Input must be of type Number');
    }
    const converted = m * 1000;
    return converted;
}

function InputException(message) {
    this.message = message;
    this.name = 'InputException';
}

module.exports = {

    celsius2Fahrenheit,

    fahrenheit2Celsius,

    km2m,

    m2km,

    km2m,

    ms2kmh,

    kmh2ms,

    mm2m,

    m2mm,

    InputException

};