import Nav from '../../components/PublicNav';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [messageServer, setMessageServer] = useState<string>('');
  const navigate = useNavigate();
  


  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handlePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    setMessageServer('');
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password
      }, 
      {
        withCredentials: true
      }
  );
  
      setMessageServer(response.data.message);
      console.log("Login success:", response.data);

      if (response.data.token){
        localStorage.setItem("token", response.data.token)
      }
      console.log(response.status);
      if(response.status === 200){
        navigate('/dashboard');
      } else {
        alert("Login failed");
      }

    } catch (err: unknown) {
      if (err instanceof Error && "response" in err && err.response) {
        setMessageServer((err.response as any).data.message);
       } else {
        setMessageServer("An error occurred.");
      }
    }
  }

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
            onChange={handleEmail}
          />
          <input
            className="p-2 border border-gray-400 rounded w-64"
            placeholder="Password"
            type="password"
            onChange={handlePW}
          />
          <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}>
            Login
          </button>
        </div>
        <div>
          {messageServer}
        </div>
      </div>
    </div>
  </div>

  );
};


export default Login;