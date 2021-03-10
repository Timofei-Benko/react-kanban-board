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
                        title: title,
                        description: description,
                        date: date,
                        status: 'toDo',
                        id: id,
                    }
                ]
            }
        }
        default:
            return state
    }
}

export default cardsReducer;