import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import logo from '../../Public/image/Picture1.png'
import '../../Public/css/navbar.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navbar=(props) => {
    const navigate=useNavigate();
    const { user }=props;
    const profileLink="/users/"+user._id;
    console.log(profileLink);
    const logoutHandler=() => {
        axios.get('http://localhost:4000/logout', { withCredentials: true })
            .then((response) => {
                let { error }=response.data;
                if (error==undefined) {
                    navigate('/');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white text-black Navbarboxshadow">
                <div className="container-fluid">
                    <div>
                        <img src={logo} className="Navbartoplogo" />
                    </div>
                    <a className="navbar-brand fw-bold text-black" id="Navbartlogo" href="#">BitDev</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/project">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cp">Competitive Programming</a>
                            </li>
                        </ul>
                        <form className="d-flex" action="/search">
                            <input name="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-3" type="submit">Search</button>
                        </form>
                        <ul className="aboutus navbar-nav ms-md-3">
                            <li className="nav-item">
                                <a className="nav-link" onClick={logoutHandler}>Logout <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1h-1z" />
                                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                                </svg></a>
                            </li>
                        </ul>
                        {/* <form className="d-flex" action={profileLink}>
                            <button type="submit" className="btn btn-success text-black rounded-circle mx-1">AA
                            </button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar