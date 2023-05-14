window.onload = () => {
    /*Вивести список планет в вигляді карток, і зробити кнопки для фільтрування планет за розміром 
    (при кліку на кнопку планети повині вивестись від більшого розміру до меншого і при кліку знову від меншого до більшого) 
    Зробити такий самий фільтр по population */
    let container = document.querySelector('.container');

    let planets = [];

    let planetUrl = 'https://swapi.dev/api/planets';
    fetch(planetUrl)
        .then(response => response.json())
        .then(planetsData => {
            let responseData = planetsData.results;
            for(let i = 0; i < responseData.length; i++) {
                let planetCard = document.createElement('div');
                planetCard.className = 'planetCard';

                let planetName = document.createElement('h1');
                planetName.innerHTML = responseData[i].name;
                planetCard.appendChild(planetName);

                let planetSize = document.createElement('p');
                planetSize.innerHTML = `Diameter: ${responseData[i].diameter}`;
                planetCard.appendChild(planetSize);

                let planetPopulation = document.createElement('p');
                planetPopulation.innerHTML = `Population: ${responseData[i].population}`;
                planetCard.appendChild(planetPopulation);

                let planetClimate = document.createElement('p');
                planetClimate.innerHTML = `Climate: ${responseData[i].climate}`;
                planetCard.appendChild(planetClimate);

                container.appendChild(planetCard);
                planets.push(...responseData);

            }
    });
       
}