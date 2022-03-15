import translations from './translations.json';

function translate(page, lang, property){
    return translations[page][0][lang][0][property]
}

export default translate
