import React, {useEffect, useState} from 'react'
import './register.css'
function Register() {
    const [apiData, setApiData] = useState(undefined)
    const [formattedStates, setFormattedStates] = useState(undefined);
    const [formattedOccupations, setFormattedOccupations] = useState(undefined);
    useEffect(() => {
        fetch('https://frontend-take-home.fetchrewards.com/form')
            .then((response) => response.json())
            .then((data) => setApiData(data));
    }, [])
    useEffect(() => {
        console.log(apiData);
        if (apiData){
            setFormattedOccupations(apiData.occupations.map((occupation) => <option value={occupation}>{occupation}</option>) )
            setFormattedStates(apiData.states.map((state) => <option value={state['name']}> {state['name']}</option>));
        }
    }, [apiData])
    async function handleSubmit(e){
        e.preventDefault();
        const values = {};
        for(let i = 0; i < 6; ++i){
            if(['name', 'password', 'email', 'state', 'occupation'].includes(e.target[i].name))
                values[e.target[i].name] = e.target[i].value;
        }
        console.log(values);
        const response = await fetch('https://frontend-take-home.fetchrewards.com/form', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        });
        console.log('response: ', response);
    }
    return (
    <form className='Register' onSubmit={(e) => handleSubmit(e)}>
        <h2>Register</h2>
        <div className='name-email-container row-container'>
            <div className='name-container field-container'>
                <label htmlFor="name">Full Name</label>
                <input type="text" name='name' id='name'/>
            </div>
            <div className='email-container field-container'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email'/>
            </div>
        </div>
        <div className='password-confirmpassword-container row-container'>
            <div className='password-container field-container'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password'/>
            </div>
            <div className='confirm-password-container field-container'>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name='confirm-password' id='confirm-password'/>
            </div>
        </div>
        <div className='occupation-state-container row-container'>
            <div className='occupation-container field-container'>
                <label htmlFor="occupation">Occupation</label>
                <select name="occupation" id="occupation">
                    {formattedOccupations ? formattedOccupations : ''}
                </select>
            </div>
            <div className='state-container field-container'>
                <label htmlFor="confirm-password">State</label>
                <select name="state" id="state">
                    {formattedStates ? formattedStates : ''}
                </select>
            </div>
        </div>
        <button className='submitButton' type='submit' name='button'>Submit</button>
    </form>
    )
}

export default Register