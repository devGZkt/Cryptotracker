import Nav from '../components/PublicNav';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentPrice = () => {
  
    const [bitcoinPrice, setBitcoinPrice] = useState(0);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bitcoin-price');
        console.log(response.data.bitcoinPrice);
        setBitcoinPrice(response.data.bitcoinPrice);
      }
      catch (err) {
        setError(err);
      }
      console.log(bitcoinPrice)
    }
    fetchBitcoinPrice();
  }, [])

  useEffect(() => {
    console.log(bitcoinPrice);
  }, [bitcoinPrice]);

  return (
    <div>
        <Nav />
        <div>
            <div>
                Current Bitcoin Price: ${bitcoinPrice}
            </div>
            <div>
                
            </div>
        </div>
    </div>
  );
};

export default CurrentPrice;