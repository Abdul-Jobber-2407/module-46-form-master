import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContest = createContext('gold')
export const Ring = createContext('Ring')
export const Moneycontext = createContext(1000);
const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <Moneycontext.Provider value={[money, setMoney]}>
                <AssetContest.Provider value="gold">
                    <Ring.Provider value = "Ring">
                        <section className="flex">
                            <Dad asset={asset}></Dad>
                            <Uncle asset={asset}></Uncle>
                            <Aunty></Aunty>
                        </section>
                    </Ring.Provider>
                </AssetContest.Provider>
            </Moneycontext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and export it . 
 * 2. Add provider for the context with a value . value could be anything . 
 * 3. useContext to access value in the context API . 
 */