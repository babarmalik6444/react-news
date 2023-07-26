import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../store/auth-slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.auth.loading);

    const login = () => {
        dispatch(loginAsync({email, password}));
    }

    if (isAuthenticated) {
        navigate("/"); 
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
            {loading && (
                    <div className="text-center">Loading...</div>
                )}
                <h3 className="center">Login</h3>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;