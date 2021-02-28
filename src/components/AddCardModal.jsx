import { useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddCardModal(props) {

    const {
        modalVisibility,
        setModalVisibility,
        modalClasses,
        cards,
        setCards,
    } = props;

    const [titleVal, setTitleVal] = useState('')
    const [descriptionVal, setDescriptionVal] = useState('')

    const handleModalClose = () => setModalVisibility(false)

    const getDate = () => new Date(Date.now()).toLocaleDateString();


    const handleCardSave = () => {
        if (titleVal && descriptionVal) {
            const card = {
                title: titleVal,
                description: descriptionVal,
                date: getDate(),
                status: 'toDo',
                id: uuidv4(),
            }
            console.log(card)

            if (cards.length === 0) {
                setCards([card])
                setModalVisibility(false)
                console.log(cards, true)
                return
            }

            setCards(prevState => [...prevState, card])
            setModalVisibility(false)
            console.log(cards)
        }
    }

    return (
        <div className={`modal ${modalClasses}`} id="add-card-modal">
            <div className="modal__content">
                <div className="modal__header">
                    <span className="modal__header-tip">
                        <span className="modal__header-tip-title">Tip:&nbsp;</span>
                        <span className="modal__header-tip-copy">the title can't be longer than 24 characters!</span>
                    </span>
                    <span className="modal__header-close-btn"
                          onClick={handleModalClose}
                    >&times;</span>
                </div>

                <input className="modal__title modal__title--input"
                       data-input_type="title"
                       type="text"
                       maxLength="24"
                       placeholder="Enter task title"
                       onChange={(e) => setTitleVal(e.target.value)}
                />
                <span className="error-message error-message--title" data-input_type="title">This field is
                        required</span>
                    <textarea className="modal__description modal__description--input"
                              data-input_type="description"
                              name=""
                              rows="3"
                              maxLength="75"
                              placeholder="Enter task description"
                              onChange={(e) => setDescriptionVal(e.target.value)}
                    />
                    <span className="error-message error-message--description" data-input_type="description">This field is
                        required</span>
                    <button className="modal__save-btn"
                            onClick={handleCardSave}
                    >Save
                    </button>
            </div>
        </div>
    )
}
export default AddCardModal