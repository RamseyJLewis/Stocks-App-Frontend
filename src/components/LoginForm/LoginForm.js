import React,{useState} from 'react'

function LoginForm({ Login,error}) {
    const [details, setDetails] = useState({UserName:'',Password:''});
    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
            <h2>Login</h2>
            {(error != '') ? ( <div className='error'></div>): ''}
             <div className='form-group'>
                    <label htmlFor='UserName'> UserName:</label>
                    <input type='text' name='UserName' id='UserName' onChange={e => setDetails({...details, UserName: e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='Password'> Password:</label>
                    <input type='text' name='Password' id='Password' onChange={e => setDetails({...details, Password: e.target.value})}/>
                </div>
                <input type='submit' value='LOGIN'/>
            </div>
        </form>
    )
}

export default LoginForm;
