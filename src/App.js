import { useState } from 'react';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AddCardModal from "./components/AddCardModal";

import './styles/scss/main.scss';

function App() {

    const [modalVisibility, setModalVisibility] = useState(false)

    const showHideModalClasses = modalVisibility ? 'active' : null

    return (
        <div className="wrap">
              <Header/>
              <Main
                  setModalVisibility = { setModalVisibility }
              />
              <Footer/>
              <AddCardModal
                  setModalVisibility = { setModalVisibility }
                  modalClasses = { showHideModalClasses }
              />
        </div>
    )
}

export default App;
