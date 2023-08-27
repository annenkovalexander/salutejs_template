import { SaluteHandler } from '@salutejs/scenario';


export const runAppHandler: SaluteHandler = ({ res }) => {
    res.appendSuggestions(['Пойдём на лево', 'Пойдем на право']);
    res.setPronounceText('начнем');
    res.appendBubble('Начнем');
};

export const noMatchHandler: SaluteHandler = ({ res }) => {
    res.setPronounceText('Я не знаю, я не понимаю');
    res.appendBubble('Я не понимаю');
};


