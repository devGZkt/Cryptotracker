import Nav from '../components/Nav';
import { useState } from 'react';

const CurrentPrice = () => {
  
    const [bitcoinPrice, setBitcoinPrice] = useState(0);

  return (
    <div>
        <Nav />
        <div>
            <div>
                Current Price is per bitcoin
            </div>
            <div>
                
            </div>
        </div>
    </div>
  );
};

export default CurrentPrice;