class Country {

    constructor(name, nationalColors, population, worldShare, region) {
        this.name = name;
        this.nationalColors = nationalColors;
        this.population = population;
        this.worldShare = worldShare;
        this.region = region;
    }

    orderByPopulation() {

    }

    getCountriesByColor() {

    }

    projectPopulation() {

    }

}

const unitedStates = new Country('United States', 'Red, White, Blue', 331002651, 0.042, 'North America');
const australia = new Country('Australia', 'Green, Gold', 25499884, 0.03, 'Australia/Oceania');

const countryData = {
    'UnitedStates': unitedStates,
    'Australia': australia
}

console.log(countryData)

console.log(unitedStates, australia)