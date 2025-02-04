import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
        <Link to='/calculate-price'>Calculate Price</Link>
        <Link to='/current-price'>Current Price</Link>
        <div>
          <Link >Login</Link>
          <Link>Signup</Link>
        </div>
    </div>
  );
};

export default Nav;