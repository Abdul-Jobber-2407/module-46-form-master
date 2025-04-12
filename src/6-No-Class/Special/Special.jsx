import { useContext } from "react";
import { AssetContest, Ring } from "../Grandpa/Grandpa";

const Special = ({name,asset}) => {
    const gift = useContext(AssetContest)
    const naw = useContext(Ring)
    return (
        <div>
            <h2>Speical:{name}</h2>
            <p>has:{asset}</p>
            <p>Also has : {gift}</p>
            <p>Ma Jononi: {naw}</p>
        </div>
    );
};

export default Special;