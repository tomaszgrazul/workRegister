import { useState } from "react";
import './WorkRegister.css';
import axios from "axios";
import ModalCompanyName from "./Components/ModalCompanyName";


const WorkRegister = () => {

    const [register, setRegister] = useState([{
        companyName: ''
    }]);

    const [formData, setFormData] = useState({
        companyName: ''
    });

    const [openModalCompanyName, setOpenModalCompanyName] = useState(true);

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData ({
            ...formData,
            [name]: target.value,
        });
    };

    function handleCompanyList() {
        console.log('Lista firm');
    }

    const addCompany = (event) => {
        // event.preventDefault();
        
 
        let newCompany = {
            _id: Date.now(),
            companyName: formData.companyName
        }
console.log("newCompany", newCompany);
        // setRegister(register.concat(newUser));

        setFormData({
            companyName: ''
        });

        // axios
        // .post("http://127.0.0.1:8080/add", newCompany)
        // .then((res) => {
         
        //  })
        // .catch((error) => {
        //     console.error(error);
        // });

        // axios
        // .post("http://127.0.0.1:8080/read", {id: newCompany._id}) 
        // .then((res) => { 
        //     setRegister(register.concat(res.data));      
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
    };

    return (
        <div className="register-main">
            <header>
                <h1>Prace szczególnie niebezpieczne</h1>
            </header>
            <form>
                <div>
                    <div className="label">
                        <label htmlFor="praceRealizuje">Prace realizuje</label>
                    </div> 
                    <input type="text" placeholder="" name="praceRealizuje" />
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrPorozumienia">Nr porozumienia</label>
                    </div> 
                    <input type="text" placeholder="" name="nrPorozumienia" />
                    <button>Wybierz</button>
                </div>
                
                <div>
                    <div className="label">
                        <label htmlFor="nrFirmyZewnetrznej">Nr firmy zew.</label>
                    </div> 
                    <input type="text" placeholder="" name="nrFirmyZewnetrznej" />
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nazwaFirmy">Nazwa firmy</label>
                    </div> 
                    <input onChange={handleInputChange}  value={formData.companyName} type="text" placeholder="" name="nazwaFirmy" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCompany();
                        
                        // console.log("newCompany", formData.companyName);

                    }}>Dodaj</button>
                    <button onClick={() => {
                        setOpenModalCompanyName(true);
                    }}>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nazwaBiura">Nazwa buira</label>
                    </div>  
                    <input type="text" placeholder="" name="nazwaBiura" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="poleceniodawca">Poleceniodawca</label>
                    </div>   
                    <input type="text" placeholder="" name="poleceniodawca" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynujący">Koordynujący</label>
                    </div>    
                    <input type="text" placeholder="" name="koordynujący" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="koordynator">Koordynator</label>
                    </div>  
                    <input type="text" placeholder="" name="koordynator" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="dopuszczający">Dopuszczający</label>
                    </div>   
                    <input type="text" placeholder="" name="dopuszczający" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="kierującyZespołem">Kierujący zespołem</label>
                    </div> 
                    <input type="text" placeholder="" name="kierującyZespołem" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nadzorEksploatacyjny">Nadzór eksploatacyjny</label>
                    </div>     
                    <input type="text" placeholder="" name="nadzorEksploatacyjny" />
                    <button>Wybierz</button>
                </div>

                <div>
                    <label htmlFor="rozpoczeciePracy">Rozpoczęcie pracy (data, godzina)</label>
                    <input type="datetime-local" placeholder="" name="rozpoczeciePracy" />
                </div>

                <div>
                    <label htmlFor="zakonczeniePracy">Zakończenie pracy (data, godzina)</label>
                    <input type="datetime-local" placeholder="" name="zakonczeniePracy" />
                </div>



                
                

            </form>
            {openModalCompanyName && <ModalCompanyName setModalCompanyName={setOpenModalCompanyName} handleCompanyList={handleCompanyList}/>}
        </div>

    )
}




export default WorkRegister;