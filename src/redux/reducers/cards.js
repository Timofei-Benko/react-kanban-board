const initState = {
    cards: []
}

const cardsReducer = (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_CARD': {
            const { title, description, date, id } = payload

            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        title,
                        description,
                        date,
                        status: 'toDo',
                        id,
                    }
                ]
            }
        }
        case 'MOVE_CARD': {
            const [ id, status ] = payload;
            let newStatus;

            if (status === 'toDo') {
                newStatus = 'inProgress'
            }

            if (status === 'inProgress') {
                newStatus = 'done'
            }

            if (status === 'done') {
                newStatus = 'toDo'
            }

            state.cards.forEach(card => card.id === id ? card.status = newStatus : null);

            return {
                ...state,
                cards: [
                    ...state.cards,
                ]
            }
        }
        case 'DELETE_CARD': {
            let { id } = payload;

            const cardToRemoveIdx = state.cards.findIndex(card => card.id === id);

            state.cards.splice(cardToRemoveIdx, 1);

            return  {
                ...state,
                cards: [
                    ...state.cards,
                ]
            }
        }
        case 'CLEAR_COLUMN': {
            let [ counter, column ] = payload;

            const stateToModify = [...state.cards]

            while (counter > 0) {
                stateToModify.forEach(card => {
                    if (card.status === column) {
                        stateToModify.splice(stateToModify.indexOf(card), 1)
                    }
                })
                counter--
            }

            return  {
                ...state,
                cards: [
                    ...stateToModify,
                ]
            }
        }
        default:
            return state
    }
}

export default cardsReducer;