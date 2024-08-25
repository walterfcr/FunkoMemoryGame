import { LANGUAGE_TYPE } from "./constants.js";
const languageSelected = localStorage.getItem('language');

//English
const menu = 'Menu';
const login = 'Register';
const loginTitle = 'Add your name to save your scores';
const username = 'Username';
const play = 'Play';
const time = 'time';
const scores = 'Scores';
const difficulty = 'Difficulty';
const themes = 'Themes';
const credits = 'Credits';
const language = 'Language';
const low = 'Low';
const medium = 'Medium';
const high = 'High';
const heroes = 'Heroes / Villians';
const movies = 'Movies / Series';
const musicians = 'Musicians';
const videogames = 'Videogames';
const spanish = 'Spanish';
const english = 'English';

//Spanish
const menuES = 'Inicio';
const loginES = 'Registrar';
const loginTitleES = 'Ingresa tu nombre para salvar tu puntuación';
const usernameES = 'Usuario';
const playES = 'Jugar';
const timeES = 'Tiempo';
const scoresES = 'Puntuaciones';
const difficultyES = 'Dificultad';
const themesES = 'Categorias';
const creditsES= 'Creditos';
const languageES = 'Lenguaje';
const lowES = 'Facil';
const mediumES = 'Intermedio';
const highES = 'Difícil';
const heroesES = 'Heroes / Villanos';
const moviesES = 'Peliculas / Series';
const musiciansES = 'Musicos';
const videogamesES = 'Videojuegos';
const spanishES = 'Español';
const englishES = 'Ingles';



export const LOCALIZATION = {
    menu: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? menu : menuES; },
    login: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? login : loginES; },
    loginTitle: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? loginTitle : loginTitleES; },
    username: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? username : usernameES; },
    play: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? play : playES; },
    time: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? time : timeES; },
    scores: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? scores : scoresES; },
    difficulty: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? difficulty : difficultyES; },
    themes: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? themes : themesES; },
    credits: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? credits : creditsES; },
    language: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? language : languageES; },
    low: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? low : lowES; },
    medium: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? medium : mediumES; },
    high: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? high : highES; },
    heroes: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? heroes : heroesES; },
    movies: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? movies : moviesES; },
    musicians: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? musicians : musiciansES; },
    videogames: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? videogames : videogamesES; },
    spanish: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? spanish : spanishES; },
    english: () => { return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? english : englishES; },

}

