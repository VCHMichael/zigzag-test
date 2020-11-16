import React, {useState} from 'react'
import './App.css';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";


function App() {
    const [isOpenModal, setOpenModal] = useState(false)
    const handleToggleModal = () => {
        setOpenModal(!isOpenModal)
    }

    return (
        <>
            <Button text='Открыть модалку' onCLick={handleToggleModal}/>
            {isOpenModal && <Modal closeFn={handleToggleModal}/>}
        </>
    );
}

export default App;
