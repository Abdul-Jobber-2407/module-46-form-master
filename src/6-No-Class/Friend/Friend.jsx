import React, { useContext } from 'react';
import { AssetContest } from '../Grandpa/Grandpa';

const Friend = () => {
    const gift = useContext(AssetContest);
    return (
        <div>
            <h2>Friend</h2>
            <p>has: {gift}</p>
        </div>
    );
};

export default Friend;