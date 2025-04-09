import Nav from '../components/PublicNav';
import PriceList from './PriceList';
const Home = () => {
  return (
    <div className='flex align-center'>
      <div>
        <Nav />
      </div>
      <div className='h-{screen} w-{screen} flex align-center justify-center'>
        <PriceList />
      </div>
    </div>
  );
};

export default Home;