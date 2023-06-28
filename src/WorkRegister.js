import { useState } from "react";
import './WorkRegister.css';
// import axios from "axios";
import ModalCompanyName from "./Components/ModalCompanyName";


const WorkRegister = () => {

    const [OpenModalCompanyName, setOpenModalCompanyName] = useState(false);

    // const handleCompanyList = () => {
    //     console.log('Lista firm');
    // }

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
                    <input type="text" placeholder="" name="nazwaFirmy" />
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
            {OpenModalCompanyName && <ModalCompanyName setModalCompanyName={setOpenModalCompanyName}/>}
        </div>

    )
}




export default WorkRegister;