import { useContext } from "react";
import { Moneycontext } from "../Grandpa/Grandpa";

const Brother = () => {
     const [money] = useContext(Moneycontext)
    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa: {money}</p>
        </div>
    );
};

export default Brother;