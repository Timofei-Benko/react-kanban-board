const initState = {
    cards: []
}

const cardsReducer = (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_CARD': {
            const { title, description, date, id } = payload

            const modifiedState = {
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

            return {
                ...modifiedState
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

            const newState = state.cards.filter(card => card.id !== id)

            return  {
                ...state,
                cards: [
                    ...newState,
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