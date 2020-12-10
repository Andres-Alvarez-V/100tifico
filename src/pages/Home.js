import getData from '../utils/getData';

async function Home (){


    const characters = await getData(1, 'home');
    const view = `
    <div class="Characters" id="characters" >
        ${characters.results.map(character => `
        <article class="Characters-item">
            <a href="#/${character.id}/">
                <img src=${character.image} alt="${character.name}">
                <h2>${character.name}</h2>
            </a>
        </article>
        `).join('')}

    </div>
    <button id="button_getCaracter">Cargar mas</button>
    `;

    return view;
}


export default Home;