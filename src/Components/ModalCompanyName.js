import React from "react";
import './ModalCompanyName.css'

function ModalCompanyName({setModalCompanyName}) {

    return (
            <div className="modalCompanyName">
                <h3>Lista firm</h3>
                
                <button className="btn-modal" onClick={() => setModalCompanyName(false)} >Anuluj</button>
            </div>
        )
}

export default ModalCompanyName;