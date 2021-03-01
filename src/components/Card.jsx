export default (props) => {
    const {
        cards,
        setCards,
        column,
        title,
        description,
        date,
        id,
    } = props;

    function handleMoveCard(id) {
        if (column === 'toDo') {
            const prevState = [...cards]
            prevState.forEach(card => {
                return card.id === id ? card.status = 'inProgress' : null
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
        console.log(cards)
    }

    return (
        <div className="board__card" data-card="card">
            <h3 className="board__card-title">{title}</h3>
            <p className="board__card-copy">{description}</p>
            <div className="board__card-footer">
                <p className="board__card-date">{date}</p>
                <button className="board__card-move-btn"
                        onClick={() => handleMoveCard(id)}
                >
                    <svg className="board__card-move-btn-icon" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512.002 512.002">
                        <defs/>
                        <path
                            d="M388.425 241.951L151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105-222.728 222.104c-7.759 7.74-7.779 20.301-.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074 0 10.141-1.932 14.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05s-2.103-10.326-5.834-14.051z"/>
                    </svg>
                </button>
                <button className="board__card-remove-btn">
                    <svg className="board__card-remove-btn-icon" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 414.298 414.299">
                        <defs/>
                        <path
                            d="M3.663 410.637c2.441 2.44 5.64 3.661 8.839 3.661 3.199 0 6.398-1.221 8.839-3.661l185.809-185.81 185.81 185.811c2.44 2.44 5.641 3.661 8.84 3.661 3.198 0 6.397-1.221 8.839-3.661 4.881-4.881 4.881-12.796 0-17.679l-185.811-185.81 185.811-185.81c4.881-4.882 4.881-12.796 0-17.678-4.882-4.882-12.796-4.882-17.679 0l-185.81 185.81L21.34 3.663c-4.882-4.882-12.796-4.882-17.678 0-4.882 4.881-4.882 12.796 0 17.678l185.81 185.809L3.663 392.959c-4.882 4.882-4.882 12.797 0 17.678z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}