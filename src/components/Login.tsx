import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Login() {

    const [namellog, setNamellog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);



    function handleLogin(e: any) {
        e.preventDefault();
        let lsData = localStorage.getItem("lab6") ? JSON.parse(localStorage.getItem("lab6") || "") : []
        let userData = Array(...lsData)
        let filteredData = userData.filter(item => namellog === item.name && item.password === passwordlog)
        console.log(userData)
        console.log(filteredData)

        if (!namellog || !passwordlog) {
            setFlag(true);
        } else if (filteredData.length === 0) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" onChange={(event) => setNamellog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Incorect Data
                        </Alert>}
            </form>
                : <Home />
            }
        </div>
    )
}

export default Login
