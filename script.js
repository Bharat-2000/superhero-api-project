// access token -> 1536603266757503
const SUPERHERO_TOKEN = "1536603266757503"
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}/`;
let hero_name = document.getElementById('hero_name');
let hero_stats = document.getElementById('hero_stats');
const getSuperHero = (id) =>{
    fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
    .then(data => {
        const newHeroDiv = document.getElementById('heroImage');
        // document.querySelector('body').innerHTML += `<img src= "${data.image.url}" />`
        
        newHeroDiv.innerHTML = `<img src= "${data.image.url}" alt = ${data.name}/>`;
        hero_name.innerText = `Name: ${data.name}`;
        hero_stats.innerText = `Intelligence: ${data.powerstats.intelligence}`;
    })
}

const searchInput = document.getElementById('search_box');
const getSuperHeroSearch = (name) =>{
    fetch(`${BASE_URL}/search/${name}`)
    .then(res => res.json())
    .then(data => {
        const hero = data.results[0];
        let newHeroDiv = document.getElementById('heroImage');
        newHeroDiv.innerHTML = `<img src= "${hero.image.url}" alt = ${hero.name}/>`;
        hero_name.innerText = `Name: ${hero.name}`;
        hero_stats.innerText = `${hero.powerstats.intelligence}`;
    })
}

const randomHero = () =>{
    const random = Math.floor(Math.random() * 731) + 1;
    return random;
}

let button_toggler = document.getElementById('button_div');
button_toggler.onclick = () => getSuperHero(randomHero());

let button_toggler_search = document.getElementById('search');
button_toggler_search.onclick = () => getSuperHeroSearch(searchInput.value);