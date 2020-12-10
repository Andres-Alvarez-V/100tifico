const addCharactersHtml = (characters) => {
    const charactersHtml = document.getElementById('characters');
    charactersHtml.innerHTML += `
    ${characters.results.map(character => `
        <article class="Characters-item">
            <a href="#/${character.id}/">
                <img src=${character.image} alt="${character.name}">
                <h2>${character.name}</h2>
            </a>
        </article>
        `).join('')}
    `
}

export default addCharactersHtml