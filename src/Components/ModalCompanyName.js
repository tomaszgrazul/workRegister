import './ModalCompanyName.css'
import axios from "axios";
import { useState, useEffect } from "react";

function ModalCompanyName({setModalCompanyName, handleCompanyList}) {

    const [register, setRegister] = useState([]);


    const readCompanyList = () => {

        axios
        .post("http://127.0.0.1:8080/read") 
        .then((res) => { 
            setRegister(res.data);          
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {

        readCompanyList();  
    }, []);

    

    return (
            <div className="modalCompanyName">
                <h3>Lista firm</h3>
                <table>
                    <tbody>
                        <tr><th className="index">L.P.</th><th className="name">Firma</th><th className="action">Akcja</th></tr>
                        {register.map((item, i) => {
                                return (
                                    <tr key={i}><td className="index">{i}</td><td className="name">{item.companyName}</td><td className="action">
                                        <button onClick={() => {

                                                var filtered = register.filter((el, i) =>
                                                    i !== register.findIndex((el) => el === item)
                                                );
                                                setRegister(filtered);
                                                // deleteUser(item._id);                                                                       
                                            }}
                                            className="btn-delete">Usuń
                                        </button></td></tr>
                                )      
                            })}    
                    </tbody>
                </table>
                {/* <button className="btn-modal" onClick={()=> readCompanyList()} >Dodaj</button> */}
                <button className="btn-modal" onClick={() => setModalCompanyName(false)} >Anuluj</button>
            </div>
        )
}

export default ModalCompanyName;