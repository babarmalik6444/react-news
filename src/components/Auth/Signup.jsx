import { useDispatch, useSelector } from "react-redux"
import { SignupAsync } from "../../store/auth-slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isCreated = useSelector((state) => state.auth.isCreated);

    const signup = () => {
        dispatch(SignupAsync({name, email, password}));
    }

    if (isCreated) {
        navigate("/"); 
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <h3 className="center">Signup</h3>
                <div className="mb-3">
                    <label htmlFor="email">Name</label>
                    <input className="form-control" name="name" id="name" type="text" max={50} value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" name="email" id="email" type="email"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" id="password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={signup}>Signup</button>
            </div>
        </div>
    )
}

export default Signup;