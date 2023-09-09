import React from 'react';
import './conform.css'
function Conform() {
    return (
        <>
            <div>
                <input type="checkbox" id="toggle"/>
                    <label htmlFor="toggle" className="show-btn">Vote Now</label>
                    <div className="wrapper">
                        <label htmlFor="toggle">
                            <i className="cancel-icon fas fa-times"></i>
                        </label>
                        <div className="icon"><i className="far fa-envelope"></i></div>
                        <div className="content">
                            <header>Become a Voter</header>
                            <p>Enter The Valid Election ID</p>
                        </div>
                        <form action="index.html" method="POST">

                            <div className="field">
                                <input type="text" className="email" name="email" placeholder="Election ID"/>
                            </div>
                            <div className="field btn">
                                <div className="layer"></div>
                                <button type="submit" name="subscribe">Submit</button>
                            </div>
                        </form>
                        <div className="text">We do not share your information.</div>
                    </div>
            </div>
        </>
    );
}

export default Conform;
