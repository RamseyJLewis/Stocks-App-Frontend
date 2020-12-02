import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Test from './components/Test';

function App() {
    const testUser = {
      Username: 'Test',
      Password:'Test123'
    }
    
    const [user, setUser] = useState({UserName:'', email:''});
    const [error, setError] = useState('');

    const Login = details =>{
      console.log(details);

      if (details.UserName == testUser.Username && details.Password == testUser.Password){
    console.log('Logged In!')
      }else{
        console.log('Login Failuer')
      } 
    }
    
    const Logout = () =>{
    console.log('logout');
    }
  return (
    <div className="LogInWindow">
      {(user.email != '')?(
        <div className='welcome'>
          <h2> Welcome, <span> {user.UserName}</span></h2>
          <button>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
      {/* <LogInScreen/>
      <Test/> */}
    </div>
  );
}

export default App;
