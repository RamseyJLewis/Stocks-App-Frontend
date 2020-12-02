import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Test from './components/Test';

function App() {
    const testUser = {
      Username: 'Test',
      Password:'Test123'
    }
    
    const [user, setUser] = useState({UserName:'', Password:''});
    const [error, setError] = useState('');

    const Login = details =>{
      console.log(details);

      if (details.UserName == testUser.Username && details.Password == testUser.Password){
        console.log('Logged In!')
        setUser({
          Username: details.Username,
          Password: details.Password
        })
        }else{
        console.log('Login Failuer');
        setError('Login Failuer');
      } 
    }
    
    const Logout = () =>{
    setUser({ UserName:'',Password:''})
    }
  return (
    <div className="LogInWindow">
      {(user.Password != '')?(
        <div className='welcome'>
          <h2> Welcome, <span> {user.UserName}</span></h2>
          <button onClick={Logout}>Logout</button>
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
