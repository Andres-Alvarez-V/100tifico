const API = 'https://rickandmortyapi.com/api/character';

async function getData(id, purpose){
    const apiURL = purpose==='home' ? `${API}/?page=${id}` : `${API}/${id}`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log('fetch error', e)
    }
};

export default getData;