//creating the request instance
let countryReq = new XMLHttpRequest();
//initiating a connection or create a connnection
countryReq.open("GET","https://restcountries.eu/rest/v2/all",true);

//sending the request
countryReq.send();

//load the function
//this function will only be triggered when the data has been received successfully
countryReq.onload = function(){
    let data = JSON.parse(this.response);

    //Get all the countries from Asia continent /region
    let asia = (data) => {
        let continentAsia = data.filter(item => item.region == 'Asia');
        continentAsia.forEach(item => console.log(item.name,item.region));
    }

    //Get all the countries with population of less than 2 lacs
    let popBelow2L = (data) => {
        let countriesPopBelow2L = data.filter(item => item.population < 200000);
        countriesPopBelow2L.forEach(item => console.log(item.name,item.population));
    }

    //Printing the details name, capital, flag
    let details = (data) => {
        let countriesDetails = data.forEach(item => console.log(item.name,item.capital,item.flag));
    }

    //Printing the total population of countries
    let totalPop = (data) => {
        let totalPopulation = data.reduce((sum,item) => sum + item.population,0);
        console.log(totalPopulation);
    }

    //Printing the countries which use US Dollars as currency.
    let usDollors = (data) => {
        let countriesUSDollorCurrency = data.filter(item => {
            for (let x of item.currencies) return (x.name == "United States dollar");
        });
        countriesUSDollorCurrency.forEach(item => console.log(item.name));
    }

    //uncomment the function you want to call
    // asia(data);
    // popBelow2L(data);
    // details(data);
    // totalPop(data);
    // usDollors(data);

}
