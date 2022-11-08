import React, {useEffect, useState} from 'react'
import './register.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
    const [apiData, setApiData] = useState(undefined)
    const [formattedStates, setFormattedStates] = useState(undefined);
    const [formattedOccupations, setFormattedOccupations] = useState(undefined);
    const [values, setValues] = useState({ name: '', password: '', email: '', occupation: '', state: '', confirmPassword : ''});
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
    const url = 'https://frontend-take-home.fetchrewards.com/form'; 
    useEffect(() => {
        // get the data from list of occupations and states from api when component renders
        fetch(url)
            .then((response) => response.json())
            .then((data) => setApiData(data));
    }, [])
    useEffect(() => {
        // console.log(apiData);

        // data from api has been retrieve we can tranform data into html elements to put in our form
        if (apiData){
            setFormattedOccupations(apiData.occupations.map((occupation) => <option value={occupation}>{occupation}</option>) )
            setFormattedStates(apiData.states.map((state) => <option value={state['name']}> {state['name']}</option>));
        }
    }, [apiData])
    // when the user presses submit button
    function handleChange(e){
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    function validateForm(){
        const { name, password, email, state, occupation, confirmPassword } = values;
        console.log(password.length)
        if (name === "" || password === "" || email === "" || state === '' || occupation === '') {
            toast.error("All fields are required", toastOptions);
            // console.log('here');
            return false;
        }
        else if(password !== confirmPassword){
            toast.error("passwords must match", toastOptions);
            return false;
        }
        else if(password.length < 8 || password.length > 15){
            toast.error("Password must be 8-15 characters", toastOptions);
            return false;
        }
        return true;
    }
    async function handleSubmit(e){
        e.preventDefault();
        if(validateForm()){
            console.log(values)
            // console.log(values);

            
            // send new user object to api 
            const response = await fetch('https://frontend-take-home.fetchrewards.com/form', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });
            // check if user was sent to api successfully
            if(response.status === 201){
                setValues({ name: '', password: '', email: '', occupation: '', state: '', confirmPassword : ''});
                toast.success('Successfully Created User', toastOptions);
            }
            else{
                toast.error('Error has occurred. Try again later', toastOptions);
            }
            console.log('response: ', response);

        }
    }
    return (
    <form className='Register' onSubmit={(e) => handleSubmit(e)} autoComplete='none'>
        <h2>Register</h2>
        <div className='name-email-container row-container'>
            <div className='name-container field-container'>
                <label htmlFor="name">Full Name</label>
                <input value={values.name}type="text" name='name' id='name' onChange={(e) => handleChange(e)} autoComplete='none'/>
            </div>
            <div className='email-container field-container'>
                <label htmlFor="email">Email</label>
                <input value={values.email} type="email" name='email' id='email' onChange={(e) => handleChange(e)} autoComplete={'none'}/>
            </div>
        </div>
        <div className='password-confirmpassword-container row-container'>
            <div className='password-container field-container'>
                <label htmlFor="password">Password</label>
                <input value={values.password} type="password" name='password' id='password' onChange={(e) => handleChange(e)}/>
            </div>
            <div className='confirm-password-container field-container'>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input value={values.confirmPassword} type="password" name='confirmPassword' id='confirm-password' onChange={(e) => handleChange(e)}/>
            </div>
        </div>
        <div className='occupation-state-container row-container'>
            <div className='occupation-container field-container'>
                <label htmlFor="occupation">Occupation</label>
                <select value={values.occupation} name="occupation" id="occupation" onChange={(e) => handleChange(e)}>
                    <option value="">choose occupation</option>
                    {formattedOccupations ? formattedOccupations : ''}
                </select>
            </div>
            <div className='state-container field-container'>
                <label htmlFor="confirm-password">State</label>
                <select value={values.state} name="state" id="state" onChange={(e) => handleChange(e)}>
                    <option value="">choose state</option>
                    {formattedStates ? formattedStates : ''}
                </select>
            </div>
        </div>
        <button className='submitButton' type='submit' name='button'>Submit</button>
        <ToastContainer />
    </form>
    )
}

export default Register