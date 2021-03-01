import { useState } from 'react';

import Column from "./Column";

function Main(props) {
    const {
        setModalVisibility,
        cards,
        setCards,
    } = props;
    return (
        <div>
        <main className={'board'}>
            <div className="board__column-container">
                <Column
                    column={'toDo'}
                    columnName={'To Do'}
                    setModalVisibility = { setModalVisibility }
                    cards = { cards }
                    setCards = { setCards }
                />
                <Column
                    column={'inProgress'}
                    columnName={'In Progress'}
                    setModalVisibility = { setModalVisibility }
                    cards = { cards }
                    setCards = { setCards }
                />
                <Column
                    column={'done'}
                    columnName={'Done'}
                    setModalVisibility = { setModalVisibility }
                    cards = { cards }
                    setCards = { setCards }
                />
            </div>
        </main>
        </div>
    )
}

export default Main;