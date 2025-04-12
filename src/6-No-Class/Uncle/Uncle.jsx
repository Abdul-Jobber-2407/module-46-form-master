import { createContext } from "react";
import Cousin from "../Cousin/Cousin";



const Uncle = ({ asset }) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                    <Cousin name={'Shaharia'} asset={asset}></Cousin>
                    <Cousin name={'Nafiza'}></Cousin>
                </section>
        </div>
    );
};

export default Uncle;