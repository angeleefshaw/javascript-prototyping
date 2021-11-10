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

const unitedStates = new Country('United States', 'Red, White, Blue', 331,002,651, 0.042, 'North America')
console.log(unitedStates)