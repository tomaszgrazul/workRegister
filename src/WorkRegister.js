import { useState } from "react";
import './WorkRegister.css';
// import axios from "axios";


const WorkRegister = () => {


    return (
        <div className="register-main">
            <header>
                <h1>Prace szczególnie niebezpieczne</h1>
            </header>
            <form>
                <div>
                    <label htmlFor="praceRealizuje">Prace realizuje</label>
                    <input type="text" placeholder="" name="praceRealizuje" />
                </div>
                
                <div>
                    <label htmlFor="nrPorozumienia">Nr porozumienia</label>
                    <input type="text" placeholder="" name="nrPorozumienia" />
                </div>
                
                <div>
                    <label htmlFor="nrFirmyZewnetrznej">Nr firmy zew.</label>
                    <input type="text" placeholder="" name="nrFirmyZewnetrznej" />
                </div>
                

            </form>

        </div>

    )
}




export default WorkRegister;