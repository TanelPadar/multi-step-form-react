import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function FirstView ({view, setView}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');


    const handleNext = () => {
        if (isValid) {
            setView({...view, view1 : false, view2 : true});
        }
        else {
            alert("all fields are required!")
        }
    }


    useEffect(() => {
        if (name.length === 0) {
            setNameError('this field is required');
        } else {
            setNameError('');
        }

        if (email.length === 0) {
            setEmailError('this field is required');
        } else {
            setEmailError('');
        }

        if (phone.length === 0) {
            setPhoneError('this field is required');
        } else {
            setPhoneError('');
        }

        if (name.length > 0 && email.length > 0 && phone.length > 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [name, email, phone]);





    return(
        <div>
            <div className="firstView d-flex flex-column">
                <div className="header">Personal Info</div>
                <div className="paragraph-text mb-4">Please provide your name, email address, and phone
                    number.
                </div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="name"
                    required
                />
                { nameError.length > 0 && <div className="inputError" style={{color: 'red'}}>{nameError}</div> }
                <label htmlFor="email address">Email Address</label>
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                />
                { emailError.length > 0 && <div className="inputError" style={{color: 'red'}}>{emailError}</div> }
                <label htmlFor="phone number">Phone Number:</label>
                <input
                    type="number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                />
                { phoneError.length > 0 && <div className="inputError" style={{color: 'red'}}>{phoneError}</div> }
            </div>
            <div className="mt-5 d-flex justify-content-end">
                <button onClick={() => handleNext()} className="next-step-btn btn btn-primary">Next Step</button>
            </div>

        </div>
    )
}

export default FirstView;
