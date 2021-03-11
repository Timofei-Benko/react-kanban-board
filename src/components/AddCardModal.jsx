import { useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function AddCardModal(props) {
    const {
        setModalVisibility,
        modalClasses,
    } = props;

    const dispatch = useDispatch();

    const [titleVal, setTitleVal] = useState('');
    const [descriptionVal, setDescriptionVal] = useState('');
    const [displayTitleError, setDisplayTitleError] = useState(false);
    const [displayDescriptionError, setDisplayDescriptionError] = useState(false);

    const showHideTitleError = displayTitleError && 'active';
    const showHideDescriptionError = displayDescriptionError && 'active';

    const handleModalClose = () => {
        setModalVisibility(false)
        setTitleVal('')
        setDescriptionVal('')
        setDisplayTitleError(false)
        setDisplayDescriptionError(false)
    }

    const handleCardSave = () => {
        if (titleVal && descriptionVal) {

            dispatch({
                type: 'ADD_CARD',
                payload: {
                    title: titleVal,
                    description: descriptionVal,
                    date: new Date(Date.now()).toLocaleDateString(),
                    status: 'toDo',
                    id: uuidv4(),
                },
            })

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
                <span className={`error-message error-message--title ${showHideTitleError}`}>
                    This field is required
                </span>
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
                    <span className={`error-message error-message--description ${showHideDescriptionError}`}>
                        This field is required
                    </span>
                    <button className="modal__save-btn"
                            onClick={handleCardSave}
                    >Save
                    </button>
            </div>
        </div>
    )
}

export default AddCardModal;
