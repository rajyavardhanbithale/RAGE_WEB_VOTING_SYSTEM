import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
// import './final.css'



function Logout() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    cookies.remove('BROWSER-X-RENDER-COOKIE');
    navigate('/')

}



export default Logout