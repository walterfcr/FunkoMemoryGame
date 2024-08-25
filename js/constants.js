const login = 'LOGIN';
const play = 'PLAY';
const scores = 'SCORES';
const difficulty = 'DIFFICULTY';
const themes = 'THEMES';
const credits = 'CREDITS';
const menu = 'MENU';
const localization = 'LOCALIZATION';

export const GOTO_EVENT_TYPE = {
    LOGIN: login,
    PLAY: play,
    SCORES: scores,
    DIFFICULTY: difficulty,
    THEMES: themes,
    CREDITS: credits,
    MENU: menu,
    LOCALIZATION: localization
}

const low = 4;
const medium = 8;
const high = 12;

export const DIFFICULTY_TYPE = {
    LOW: low,
    MEDIUM: medium,
    HIGH: high
}

const heroes = 'HEROES';
const movies = 'MOVIES';
const videogames = 'VIDEOGAMES';
const musicians = 'MUSICIANS';

export const THEME_TYPE = {
    HEROES: heroes,
    MOVIES: movies,
    VIDEOGAMES: videogames,
    MUSICIANS: musicians,
}

const spanish = 'es';
const english = 'en';

export const LANGUAGE_TYPE = {
    ES: spanish,
    EN: english

}