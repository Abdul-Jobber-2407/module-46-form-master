
import Friend from "../Friend/Friend";
import Special from "../Special/Special";
import { AssetContest } from "../Grandpa/Grandpa";
import GorJamai from "../GorJamai/GorJamai";



const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Nafiz' && <Friend></Friend>}
                { name === 'Nafiza' && <GorJamai></GorJamai>}

            </section>
        </div>
    );
};

export default Cousin;