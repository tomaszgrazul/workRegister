import React from "react";
import './ModalCompanyName.css'

function ModalCompanyName({setModalCompanyName, handleCompanyList}) {

    return (
            <div className="modalCompanyName">
                <h3>Lista firm</h3>
                <button className="btn-modal" onClick={()=> handleCompanyList()} >Dodaj</button>
                <button className="btn-modal" onClick={() => setModalCompanyName(false)} >Anuluj</button>
            </div>
        )
}

export default ModalCompanyName;