import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const blueDark = () => {
        props.darkColoredMode({
            themeMode: "dark",
            darkColor: "#01579b",
            lightColor: "#4f83cc"
        });
    }
    const purpleDark = () => {
        props.darkColoredMode({
            themeMode: "dark",
            darkColor: "#4a148c",
            lightColor: "#7c43bd"
        });
    }
    const greenDark = () => {
        props.darkColoredMode({
            themeMode: "dark",
            darkColor: "#1b5e20",
            lightColor: "#4c8c4a"
        });
    }
    const orangeDark = () => {
        props.darkColoredMode({
            themeMode: "dark",
            darkColor: "#bf360c",
            lightColor: "#f9683a"
        });
    }
    const darkDark = () => {
        props.darkColoredMode({
            themeMode: "dark",
            darkColor: "#263238",
            lightColor: "#4f5b62"
        });
    }
    const whiteMode = () => {
        props.darkColoredMode({
            themeMode: "light",
            darkColor: "#f8f9fa",
            lightColor: "white"
        });
    }


    return (
        // //`` back tick means using literals
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{
            backgroundColor:props.color.darkColor
        }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                        </li>
                    </ul>
                    <div className={`my-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <button className='btn mx-1' style={{ backgroundColor: '#01579b', border:"1px solid white" }} onClick={blueDark}></button>
                        <button className='btn mx-1' style={{ backgroundColor: '#1b5e20', border:"1px solid white" }} onClick={greenDark}></button>
                        <button className='btn mx-1' style={{ backgroundColor: '#4a148c', border:"1px solid white" }} onClick={purpleDark}></button>
                        <button className='btn mx-1' style={{ backgroundColor: '#e65100', border:"1px solid white" }} onClick={orangeDark}></button>
                        <button className='btn mx-1' style={{ backgroundColor: '#263238', border:"1px solid white" }} onClick={darkDark}></button>
                        <button className='btn mx-1' style={{ backgroundColor: 'white', border:"1px solid black" }} onClick={whiteMode}></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Default props values
Navbar.defaultProps = {
    title: "TextUtils"
}
// Default props values END


// Props types
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
// Props types END