import Nav from '../../components/Nav';
import { useState } from 'react';

const Login = () => {
  
  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');



  return (
    <div className="flex flex-col h-screen">
    <Nav />
    <div className="flex flex-grow items-center justify-center">
      <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="flex flex-col items-center gap-4">
          <input
            className="p-2 border border-gray-400 rounded w-64"
            placeholder="Email/Username"
             type="text"
          />
          <input
            className="p-2 border border-gray-400 rounded w-64"
            placeholder="Password"
            type="password"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Login;