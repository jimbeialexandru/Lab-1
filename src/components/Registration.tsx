import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from './Login';

function Registration() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info] = useState(true);

    // on form submit...
    function handleFormSubmit(e: any) {
        e.preventDefault();

        if (!name || !password ) {
            setFlag(true);

        } else {
            setFlag(false);
            let lsData = localStorage.getItem("lab6") ? JSON.parse(localStorage.getItem("lab6") || "") : []
            let userData = Array(...lsData)
            console.log(typeof userData)
            userData.push({
                name: name, 
                password: password
            })
            console.log(userData)
            localStorage.setItem("lab6", JSON.stringify(userData));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }


    return (
        <>

            {info ? <div className = "outer">
                 {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Create Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Create pass" onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    <a href="#" onClick={handleClick} >LogIn</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        Insert data
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                    
                </div>}
        </>
    )
}

export default Registration
