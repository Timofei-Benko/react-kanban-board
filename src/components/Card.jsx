function Card(props) {
    const {
        column,
        cards,
        setCards,
        cardObject,
    } = props;

    function handleMoveCard(id) {
        if (column === 'toDo') {
            const prevState = [...cards]
            prevState.forEach(card => {
                return card.id === cardObject.id ? card.status = 'inProgress' : null
            })
            setCards([...prevState])
        }

        if (column === 'inProgress') {
            const prevState = [...cards]
            prevState.forEach(card => {
                return card.id === id ? card.status = 'done' : null
            })
            setCards([...prevState])
        }

        if (column === 'done') {
            const prevState = [...cards]
            prevState.forEach(card => {
                return card.id === id ? card.status = 'toDo' : null
            })
            setCards([...prevState])
        }
    }

    function handleDeleteCard(id) {
        if (cards) {
            const prevState = [...cards]
            const cardToRemove = prevState.find(card => card.id === id)
            prevState.splice(prevState.indexOf(cardToRemove), 1)
            setCards([...prevState])
        }
    }

    return (
        <div className="board__card" data-card="card">
            <h3 className="board__card-title">{cardObject.title}</h3>
            <p className="board__card-copy">{cardObject.description}</p>
            <div className="board__card-footer">
                <p className="board__card-date">{cardObject.date}</p>
                <button className="board__card-move-btn"
                        onClick={() => handleMoveCard(cardObject.id)}
                >
                    {
                        column === 'done' ?

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="board__card-move-to-frst-clmn-i" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                <path
                                    d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                            </svg>

                            :

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                    }

                </button>
                <button className="board__card-remove-btn"
                        onClick={() => handleDeleteCard(cardObject.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-x" viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Card;
