import {apiroot} from '../../config';

export const getAllCards = `${apiroot}/api/cards`;

export const searchCard = (cardName) => {
    return `${apiroot}/api/cards/search/${cardName}`;
};

