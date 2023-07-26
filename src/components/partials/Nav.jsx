import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../../store/auth-slice";

const Navbar = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  return (
    <div className="row">
        <div className="col-md-12">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">

                <Link to="/" className="navbar-brand">
                    News
                </Link>

                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {isAuthenticated ? (
                    <>
                        <li className="nav-item">
                        <span className="nav-link">Welcome, {user.name}</span>
                        </li>
                        <li className="nav-item">
                        <button
                            className="btn btn-link nav-link"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        </li>
                    </>
                    ) : (
                    <>
                        <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                            Signup
                        </Link>
                        </li>
                    </>
                    )}
                </ul>
                </div>
            </div>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;
