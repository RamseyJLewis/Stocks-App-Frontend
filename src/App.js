import React from 'react';
import { withAuthenticator, AmplifySignIn, } from '@aws-amplify/ui-react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
// import Amplify from 'aws-amplify';

function App() {
  return (
    <div className="App">
      {/* <AmplifySignIn /> */}
      <div className='container'>
      <LandingPage/>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
