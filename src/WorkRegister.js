import { useState, useEffect} from "react";
import './WorkRegister.css';
import axios from "axios";
import ModalCompanyName from "./Components/ModalCompanyName";


const WorkRegister = () => {

     const [openModalCompanyName, setOpenModalCompanyName] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [errors, setErrors] = useState({
        companyName: ''
    });
    const [companyNumber, setCompanyNumber] = useState();



    function handleCompanyList(e) {
        
        setCompanyName(e.target.value);
    }

    const handleAddCompanyName = (addCompanyName, isChecked, i) => {
                console.log(`isChecked z work ${i}`, isChecked[i]);

        !isChecked[i]? setCompanyName(addCompanyName) : setCompanyName('');    
    }

    const handleReadCompanyNumber = () => {

        readCompanyNumber(); 
    }

    const readCompanyNumber = () => {

        axios
        .post("http://127.0.0.1:8080/readCount") 
        .then((res) => { 
            setCompanyNumber(res.data);       
        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    useEffect(() => {

        readCompanyNumber(); 
        // console.log("companyNumber",companyNumber );
    }, []);


    const addCompany = () => {
       
 
        let newCompany = {
            _id: Date.now(),
            companyName: companyName
        }

        if (newCompany.companyName === '') {    
            setErrors(() => {
                return {
                    companyName: "Wpisz nazwę firmy !!!"
                };
            });
            return;
        } else setErrors('');

        setCompanyName('');

        axios
        .post("http://127.0.0.1:8080/add", newCompany)
        .then((res) => {
            readCompanyNumber(); 
         })
        .catch((error) => {
            console.error(error);
        });
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
                        <label htmlFor="companyName">Nazwa firmy</label>
                    </div> 
                    <input onChange={handleCompanyList}  value={companyName} type="text" placeholder="" name="companyName" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        addCompany();
                    }}>Dodaj</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setOpenModalCompanyName(true);
                    }}>Wybierz</button>
                    {errors.companyName && <p className="error">{errors.companyName}</p>}
                </div>

                <div>
                    <div className="label">
                        <label htmlFor="nazwaBiura">Nazwa biura</label>
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
            {openModalCompanyName && <ModalCompanyName setModalCompanyName={setOpenModalCompanyName} handleAddCompanyName={handleAddCompanyName} companyNumber={companyNumber} handleReadCompanyNumber={handleReadCompanyNumber}/>}
        </div>

    )
}




export default WorkRegister;