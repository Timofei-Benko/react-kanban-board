import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddCardModal(props) {
    const {
        setModalVisibility,
        modalClasses,
        cards,
        setCards,
    } = props;

    const [titleVal, setTitleVal] = useState('');
    const [descriptionVal, setDescriptionVal] = useState('');
    const [displayTitleError, setDisplayTitleError] = useState(false);
    const [displayDescriptionError, setDisplayDescriptionError] = useState(false);

    const showHideTitleError = displayTitleError ? 'active' : null;
    const showHideDescriptionError = displayDescriptionError ? 'active' : null;

    const handleModalClose = () => {
        setModalVisibility(false)
        setTitleVal('')
        setDescriptionVal('')
        setDisplayTitleError(false)
        setDisplayDescriptionError(false)
    }

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

            if (cards.length === 0) {
                setCards([card])
                setModalVisibility(false)
                setTitleVal('')
                setDescriptionVal('')
                return
            }

            setCards(prevState => [...prevState, card])
            setModalVisibility(false)
            setTitleVal('')
            setDescriptionVal('')

        } else if (!titleVal) {
            setDisplayTitleError(true)

        } else if (!descriptionVal) {
            setDisplayDescriptionError(true)
        }
    }

    const handleTitleKeyUp = () => setDisplayTitleError(false)
    const handleDescriptionKeyUp = () => setDisplayDescriptionError(false)

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
                       value={titleVal}
                       onChange={(e) => {
                           setTitleVal(e.target.value)
                           handleTitleKeyUp()
                       }}
                />
                <span className={`error-message error-message--title ${showHideTitleError}`} data-input_type="title">This field is
                        required</span>
                    <textarea className="modal__description modal__description--input"
                              data-input_type="description"
                              name=""
                              rows="3"
                              maxLength="75"
                              placeholder="Enter task description"
                              value={descriptionVal}
                              onChange={(e) => {
                                  setDescriptionVal(e.target.value)
                                  handleDescriptionKeyUp()
                              }}
                    />
                    <span className={`error-message error-message--description ${showHideDescriptionError}`} data-input_type="description">This field is
                        required</span>
                    <button className="modal__save-btn"
                            onClick={handleCardSave}
                    >Save
                    </button>
            </div>
        </div>
    )
}

export default AddCardModal;
