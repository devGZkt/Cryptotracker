import Nav from '../components/Nav';
import { useState, useEffect } from 'react'
import axios from 'axios';

const CalculatePrice = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(0);
  const [error, setError] = useState(null);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bitcoin-price');
        setBitcoinPrice(response.data.bitcoinPrice);
      }
      catch (err){
        setError(err); 
      }
    }
    fetchBitcoinPrice();
  }, []);

  const formattedPrice = totalBalance.toFixed(2);
  const formattedWithTousendSeparator = new Intl.NumberFormat().format(formattedPrice);

  return (
    <div>
      <Nav />
      <div>
        <input type="nummber" 
        className='border border-solid border-black' 
        placeholder='Bitcoin Amount Here'
        onChange={(e) => setTotalBalance(e.target.value * bitcoinPrice)}  />
        <div>{formattedWithTousendSeparator}$</div>
      </div>
    </div>
  );
};

export default CalculatePrice;