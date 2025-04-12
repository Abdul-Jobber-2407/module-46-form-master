
import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { Moneycontext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(Moneycontext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Jahid'}></Cousin>
                <Cousin name ={'Nafiz'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000 )}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;