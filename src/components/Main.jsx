import { useState } from 'react';

import Column from "./Column";

function Main(props) {
    const {
        setModalVisibility,
        cards
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
                />
                <Column
                    column={'inProgress'}
                    columnName={'In Progress'}
                />
                <Column
                    column={'done'}
                    columnName={'Done'}
                />
            </div>
        </main>
        </div>
    )
}

export default Main;