import Header from '../templates/Header'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Character from '../pages/Character'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import addCharactersHtml from '../utils/addCharactersHtml'
import getData from '../utils/getData';

const routes = {
    '/' : Home,
    '/:id' : Character,
    '/contact' : 'Contact',
};

const router = async () =>{
    const header = document.getElementById('header')|| null;
    const content = document.getElementById('content') || null;

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

    if( render === Home){
        const button = document.getElementById('button_getCaracter');
        let pageNumber = 1;
        button.addEventListener('click', async (ev) => {
            ev.preventDefault;
            console.log(pageNumber)
            pageNumber++;
            const characters = await getData(pageNumber, 'home')
            const charactersHtml = addCharactersHtml(characters);
        });
    };
};

export default router;
