import Nav from '../../components/Nav';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loadingData, setLodingData] = useState<boolean>(false);
  const [messageServer, setMessageServer] = useState<string>('');

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    setLodingData(true);
    setMessageServer('');
    try {
      const response = await axios.post('http://localhost:3001/users', {
        username,
        password,
      });

      setMessageServer(response.data.message);
    } catch (error) {
      const err = error as any;

      setMessageServer(err.response ? err.response.data.message : 'An error occured')
    } finally {
      setLodingData(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Nav />

      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Signup</h1>
          <div className="flex flex-col items-center gap-4">
            <input
              className="p-2 border border-gray-400 rounded w-64"
              placeholder="Username"
              type="text"
              value={username}
              onChange={handleUsername}
            />
            <input
              className="p-2 border border-gray-400 rounded w-64"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePassword}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
          <div>
            {loadingData ? <p>Loding...</p> : messageServer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
