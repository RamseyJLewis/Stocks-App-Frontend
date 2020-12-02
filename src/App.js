import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Test from './components/Test';

function App() {
    const adminUser = {
      email: 'admin@admin123',
      password:'admin123'
    }
    
    const [user, setUser] = useState({name:'', email:''});
    const [error, setError] = useState('');

    const Login = details =>{
      console.log(details)
    }
    
    const Logout = () =>{
    console.log('logout');
    }
  return (
    <div className="LogInWindow">
      {(user.email != '')?(
        <div className='welcome'>
          <h2> Welcome, <span> {user.name}</span></h2>
          <button>Logout</button>
        </div>
      ):(
        <LoginForm/>
      )}
      {/* <LogInScreen/>
      <Test/> */}
    </div>
  );
}

export default App;
