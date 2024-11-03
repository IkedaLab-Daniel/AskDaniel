import React, {useEffect, useState} from 'react'

function Modal(props){

    if (props.isVisible == true){
        setToggleModal(prevState => ({
            ...prevState,
            display: "blcok",
        }))
    }

    const [toogleModal, setToggleModal] = useState({
        display: "fixed",
    })

    function toggleOffModal(){
        setToggleModal(prevState => ({
            ...prevState,
            display: "none",
        }))
    }

    function handlePay(){
        toggleOffModal();
        showAnswer3();
    }

    return(
        <>
            <div id="modal" style={toogleModal}>
                <h2>🚨 IBCE SAF 🚨</h2>
                {anouncement}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-r89WqkOt80jbX5mELpcFlKvCbVUvLSx7Tw&s" alt="" />
                <div className="button-container">
                    <p className='close' onClick={toggleOffModal}>Close</p>
                    <p className='green' onClick={handlePay}>Pay Now</p>
                </div>
                
            </div>
        </>
        
    )
}

export default Modal