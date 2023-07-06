import './ModalCompanyName.css'
import axios from "axios";
import { useState, useEffect } from "react";

function ModalCompanyName({setModalCompanyName, handleAddCompanyName}) {

    const [register, setRegister] = useState([]);
    const [registerIsChecked, setRegisterIsChecked] = useState([]);
    const [isChecked, setIsChecked] = useState(new Array(register.length).fill(false));

    const checkHandler = (i) => {
        setIsChecked(!isChecked[i]);
        // setRegisterIsChecked(registerIsChecked.concat([i,isChecked]));
        setRegisterIsChecked(registerIsChecked.concat(isChecked[i]));
        if(registerIsChecked[i] && registerIsChecked[i+1]) {
            // registerIsChecked[i] = 'false';
            console.log('ok');
        }
        console.log(`uuu=${i}`, isChecked[i]); 
      }

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


    useEffect(() => {
        
        console.log("ala=", isChecked); 
        console.log(register.length);
    }, []);


    

    return (
            <div className="modalCompanyName">
                <div className='topModal'>
                    <h3>Lista firm</h3>
                    <div>
                        <p className='ex-modal' onClick={() => {setModalCompanyName(false); setRegisterIsChecked([]);}}>X</p>
                    </div>
                    {/* <p>ala{registerIsChecked}</p> */}
                </div>
                <table>
                    <tbody>
                        <tr><th></th><th className="name">Firma</th><th className="action">Czynność</th></tr>
                        {register.map((item, i) => {
                                return (
                                    <tr key={i}><td><input type="checkbox" className='checkbox' checked={isChecked[i]}
                                        onChange={() => {
                                            handleAddCompanyName(item.companyName, isChecked); 
                                            checkHandler(i);
                                        }} 
                                        /></td><td className="name">{item.companyName}</td><td className="action">
                                        <button onClick={() => {

                                                var filtered = register.filter((el, i) =>
                                                    i !== register.findIndex((el) => el === item)
                                                );
                                                setRegister(filtered);

                                                axios
                                                .post("http://127.0.0.1:8080/del", {id: item._id}) 
                                                .then((res) => {
                                                                 
                                                     })
                                                    .catch((error) => {
                                                        console.error(error);
                                                    });                                                                      
                                            }}
                                            className="btn-delete">Usuń
                                        {/* </button><button onClick={(e) => {handleAddCompanyName(item.companyName)}}>Wybierz</button></td></tr> */}
                                        </button></td></tr>
                                )      
                            })}    
                    </tbody>
                </table>
                {/* <button className="btn-modal" onClick={() => setModalCompanyName(false)} >Anuluj</button> */}
            </div>
        )
}

export default ModalCompanyName;