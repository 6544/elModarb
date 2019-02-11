class Api {
    async getAllCountries() {
        const response = await fetch('http://almodarrebalarabi.com/api/countries');
        const countriesData = await response.json();
         

        console.log(countriesData);
        return countriesData;
    }
    async getAllCities(country) {
         debugger;
        const response = await fetch(`http://almodarrebalarabi.com/api/states/${country}`);
        const citiesData = await response.json();
        return citiesData;

    }
    async getAllNationalities() {
        const response = await fetch('http://almodarrebalarabi.com/api/nationalities');
        const nationalityData = await response.json();
        console.log(nationalityData);
         
        return nationalityData;
    }
    async getAllCitiesOfState(state) {
          
        const response = await fetch(`http://almodarrebalarabi.com/api/cities/state/${state}`);
        const citiesOfState = await response.json();
        console.log(citiesOfState);
         
        return citiesOfState;
    }
}

export default api = new Api();