import { useState } from 'react'

import Header from "./components/Header";
import Main from "./components/Main";
import AddCardModal from "./components/AddCardModal";

import './styles/scss/main.scss'

function App() {

    const [modalVisibility, setModalVisibility] = useState(false)
    const [cards, setCards] = useState([])

    const showHideModalClasses = modalVisibility ? 'active' : null

    return (
        <div className="wrap">
              <Header/>
              <Main
                  setModalVisibility = { setModalVisibility }
                  cards = { cards }
                  setCards = { setCards }
              />
              <AddCardModal
                  modalVisibility = { modalVisibility }
                  setModalVisibility = { setModalVisibility }
                  modalClasses = { showHideModalClasses }
                  cards = { cards }
                  setCards = { setCards }
              />
        </div>
    );
    }

export default App;
