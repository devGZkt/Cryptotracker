import { useState, useEffect } from "react";
import axios from "axios";

const PriceList = () => {

    const [loading, setLoading] = useState(true);
    

    const getBitcoin = async () => {
        try {
            setLoading(true); 
                const getBitcoinResponse = await axios.get('http://localhost:3000/bitcoin');
                console.log(getBitcoinResponse);

            setLoading(false); 

        } catch (error) {
            console.error(error);
            setLoading(false); // Set loading to false even if there is an error
        }
    }

    const getSolana = async () => {
        try {
            setLoading(true); 
                const getSolanaResponse = await axios.get('http://localhost:3000/solana');
                console.log(getSolanaResponse);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.error(error);
            setLoading(false); // Set loading to false even if there is an error
        }
    }

    useEffect(() => {
        getBitcoin();
        getSolana();
    }, []); // Empty array ensures this runs only once after the initial render


    return (
        null
    );
};

export default PriceList;
